import './RespondItem.scss';
import classNames from 'classnames';
import { useState, useEffect, useRef } from 'react';
import { useMediaQuery } from '../../../hooks/useMediaQuery';

function RespondItem (props) {
    const [open, setOpen] = useState(true);

    const isMobile = useMediaQuery('(max-width: 720px)');

    const handleTextClick = () => {
        if(document.querySelector('.respond-item-button.open') !== null) {
            document.querySelector('.respond-item-button.open').click();
        }
        const nextIndex = props.isActiveIndex ? null : props.respondIndex;
        props.setActiveIndex(nextIndex);
        setOpen(!open);
    };

    // Calculate Respond Text Height

    let minHeight;

    if (isMobile) {
        minHeight = '132px';
    } else {
        minHeight = '127px';
    }

    const INITIAL_MAX_HEIGHT = 1000;

    const respondTextRef = useRef(null);
    const isFirstRender = useRef(true);
    const maxHeightRef = useRef(INITIAL_MAX_HEIGHT);

    useEffect(() => {
        if (respondTextRef.current && !isFirstRender.current) {
            if (
                maxHeightRef.current > respondTextRef.current.clientHeight &&
                maxHeightRef.current !== INITIAL_MAX_HEIGHT
            ) {
                return;
            }
            maxHeightRef.current = respondTextRef.current.clientHeight;
        }
        if (isFirstRender.current) {
            setTimeout(() => {
                if(document.querySelector('.respond-item-button.open') !== null) {
                    document.querySelector('.respond-item-button.open').click();
                }
                setOpen(false);
            }, 1000);
            
            isFirstRender.current = false;
        }
    }, [open, props.isActiveIndex]);

    // Styles

    const respondItemClasses = classNames('respond-item', {
        respond1: props.identifier === 1,
        respond2: props.identifier === 2,
        respond3: props.identifier === 3,
        respond4: props.identifier === 4,
        respond5: props.identifier === 5,
        respond6: props.identifier === 6,
        respond7: props.identifier === 7,
        respond8: props.identifier === 8,
        respond9: props.identifier === 9,
        respond10: props.identifier === 10,
        respond11: props.identifier === 11,
        respond12: props.identifier === 12,
        respond13: props.identifier === 13,
        respond14: props.identifier === 14,
        respond15: props.identifier === 15,
        respond16: props.identifier === 16,
        respond17: props.identifier === 17,
        respond18: props.identifier === 18,
        respond19: props.identifier === 19,
        respond20: props.identifier === 20,
        respond21: props.identifier === 21,
        respond22: props.identifier === 22,
        respond23: props.identifier === 23,
        respond24: props.identifier === 24,
        respond25: props.identifier === 25,
    })

    const paragraphClasses = classNames('respond-item-text', {
        'open-text': open
    })

    const buttonClasses = classNames('respond-item-button', {
        open: open,
        hidden: `${maxHeightRef.current}px` === minHeight
    })

    return (
        <div className={respondItemClasses}>
            <div className='respond-item-head'>
                <div className='respond-item-photo'></div>
                <div className='respond-item-person'>
                    <span>{props.nickName}</span>        
                    <span>{props.name}</span>
                </div>
            </div>

            <p 
                style={
                    open ? 
                        { maxHeight: maxHeightRef.current } 
                        : { maxHeight: minHeight }
                }
                ref={respondTextRef}
                className={paragraphClasses}
            >{props.text}</p>

            <div className={buttonClasses} onClick={handleTextClick}>
                <span className='respond-item-button-open'>читати повністю</span>
                <span className='respond-item-button-close'>згорнути</span>
                <div></div>
            </div>
        </div>
    )
};

export default RespondItem;