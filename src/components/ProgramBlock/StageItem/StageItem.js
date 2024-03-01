import './StageItem.scss';
import StepIcon from '../../../images/step-icon.svg';
import classNames from 'classnames';
import { useState, useEffect, useRef } from 'react';
import { useMediaQuery } from '../../../hooks/useMediaQuery';

function StageItem (props) {
    const [open, setOpen] = useState(true);

    const isMiddleScreen = useMediaQuery('(max-width: 1215px)');
    const isMiddleScreen_2 = useMediaQuery('(max-width: 970px)');
    const isMiddleScreen_3 = useMediaQuery('(max-width: 850px)');
    const isMiddleScreen_4 = useMediaQuery('(max-width: 800px)');
    const isMobile = useMediaQuery('(max-width: 650px)');

    const handleMaterialsClick = () => {
        setOpen(!open);
    }

    // Calculate Add Material Block Height

    const INITIAL_MAX_HEIGHT = 10000;

    const addMaterialsRef = useRef(null);
    const isFirstRender = useRef(true);
    const maxHeightRef = useRef(INITIAL_MAX_HEIGHT);

    useEffect(() => {
        if (addMaterialsRef && !isFirstRender.current) {
            if (
                maxHeightRef.current > addMaterialsRef.current.clientHeight &&
                maxHeightRef.current !== INITIAL_MAX_HEIGHT
            ) {
                return;
            }
            maxHeightRef.current = addMaterialsRef.current.clientHeight;
        }
        if (isFirstRender.current) {
            setTimeout(() => {
                setOpen(false);
            }, 100);
            
            isFirstRender.current = false;
        }
    }, [open, addMaterialsRef]);

    let minHeight;

    if (isMiddleScreen_3) {
        minHeight = '40px';
    } else {
        minHeight = '50px';
    }

    if (isMobile) {
        minHeight = '0px';
    }


    // Calculate The Number Of Hidden Add Materials

    let visibleAddMaterials;

    if (isMiddleScreen) {
        visibleAddMaterials = 3;
    } else {
        visibleAddMaterials = 4;
    }

    if (isMiddleScreen_2) {
        visibleAddMaterials = 2;
    }

    if (isMiddleScreen_3) {
        visibleAddMaterials = 3;
    }

    if (isMiddleScreen_4) {
        visibleAddMaterials = 2;
    }

    if (isMobile) {
        visibleAddMaterials = 0;
    }

    const numberAllAddMaterials = props.addMaterials.length;
    let addMaterialsToShow = numberAllAddMaterials - visibleAddMaterials;


    // Styles

    const blockNumberClasses = classNames('stage-item-content-block-number', {
        pro: props.name === "Весілля в Європі"
    });

    const addMaterialsTitleClasses = classNames('stage-item-add-materials-title', {
        hidden: props.addMaterials.length === 0
    });

    const addMaterialsClasses = classNames('stage-item-add-materials', {
        open: props.addMaterials.length !== 0
    });

    const openButtonClasses = classNames('stage-item-add-materials-button-open', {
        open: open,
        'big-number': addMaterialsToShow >= 10,
        hidden: numberAllAddMaterials <= visibleAddMaterials
    });

    const closeButtonClasses = classNames('stage-item-add-materials-button-close', {
        open: open,
        hidden: numberAllAddMaterials <= visibleAddMaterials
    });

    const addMaterialButtonClasses = classNames('stage-item-add-materials-button');

    return (
        <div className='stage-item'>
            <div className='stage-item-content'>
                <div className='stage-item-content-main'>
                    <div className='stage-item-content-main-title'>
                        <h4>{props.name}</h4>
                        <div className={blockNumberClasses}>
                            <span>БЛОК</span>
                            <span>#{props.number}</span>
                        </div>
                    </div>

                    <p>{props.description}</p>
                </div>

                <div className='stage-item-content-description'>
                    {
                        props.steps.map((step, index) => (
                            <div className='stage-item-content-step' key={index}>
                                <img src={StepIcon} alt={'Step Icon'}/>
                                <span>{step}</span>
                            </div>
                        ))
                    }
                </div>

                <p className='stage-item-content-mobile-text'>{props.description}</p>
            </div>

            <h5 className={addMaterialsTitleClasses}>додаткові матеріали</h5>

            <div 
                style={
                    open ? 
                        { maxHeight: maxHeightRef.current } 
                        : { maxHeight: minHeight }
                }
                className={addMaterialsClasses} 
                ref={addMaterialsRef}
            >
                {
                    props.addMaterials.slice(0, visibleAddMaterials).map((material, index) => (
                        <div key={index} className={addMaterialButtonClasses}>
                            <img src={material.icon} alt={material.text} />
                            <span>{material.text}</span>
                        </div>
                    ))
                }

                <div className={openButtonClasses} onClick={handleMaterialsClick}>
                    <div>
                        <span>+{addMaterialsToShow}</span>
                    </div>
                    <span>дивитись всі</span>
                </div>

                {
                    props.addMaterials.slice(visibleAddMaterials).map((material, index) => (
                        <div key={index + visibleAddMaterials} className={addMaterialButtonClasses}>
                            <img src={material.icon} alt={material.text} />
                            <span>{material.text}</span>
                        </div>
                    ))
                }

                <div className={closeButtonClasses} onClick={handleMaterialsClick}>сховати</div>
                        </div>
                    </div>
                )
};

export default StageItem;