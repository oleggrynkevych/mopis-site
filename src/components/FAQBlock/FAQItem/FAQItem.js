import './FAQItem.scss';
import FAQArrow from '../../../images/faq-arrow.svg';
import classNames from 'classnames';
import { useState, useEffect, useRef } from 'react';

function FAQItem (props) {
    const [open, setOpen] = useState(true);
    
    const toggleSection = () => {
        if(document.querySelector('.faq-item.open') !== null) {
            document.querySelector('.faq-item.open').click();
        }
        const nextIndex = open ? null : props.faqItemIndex;
        props.setActiveIndex(nextIndex);
        setOpen(!open);
    };

    // Calculate FAQ Answer Height

    const INITIAL_MAX_HEIGHT = 1000;

    const faqAnswerRef = useRef(null);
    const isFirstRender = useRef(true);
    const maxHeightRef = useRef(INITIAL_MAX_HEIGHT);

    useEffect(() => {
        if (faqAnswerRef.current && !isFirstRender.current) {
            if (
                maxHeightRef.current > faqAnswerRef.current.clientHeight &&
                maxHeightRef.current !== INITIAL_MAX_HEIGHT
            ) {
                return;
            }
            maxHeightRef.current = faqAnswerRef.current.clientHeight;
        }
        if (isFirstRender.current) {
            setTimeout(() => {
                setOpen(false);
            }, 10);
            
            isFirstRender.current = false;
        }
    }, [open]);

    // Styles

    const faqItemClasses = classNames('faq-item', {
        open: open 
    });

    const arrowClasses = classNames('faq-item-arrow', {
        open: open 
    });

    const answerClasses = classNames('faq-item-answer', {
        open: open
    });

    return (
        <div className={faqItemClasses} onClick={toggleSection}>
            <div className='faq-item-question'>
                <span>{props.question}</span>
                <div>
                    <img className={arrowClasses} src={FAQArrow} alt={'FAQ Arrow'}/>
                </div>
            </div>

            <div 
                className={answerClasses}
                style={
                    open ? 
                        { maxHeight: maxHeightRef.current } 
                        : { maxHeight: 0 }
                }
                ref={faqAnswerRef} 
            >
                {props.answer}
            </div>
        </div>
    )
};

export default FAQItem;