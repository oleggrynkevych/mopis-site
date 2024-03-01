import './FAQBlock.scss';
import FAQItem from './FAQItem/FAQItem';
import faqData from './faq-block-data';
import { useState } from 'react';

function FAQBlock () {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section className='faq-block'>
            <div className='faq-block-container'>
                <div className='faq-block-photo'></div>
                <h3>Відповіді на питання</h3>

                <div className='faq-block-info-box'>
                    {
                        faqData.map((item, index) => (
                            <FAQItem
                                key={index}
                                question={item.question}
                                answer={item.answer}
                                isActiveIndex={index === activeIndex}
                                setActiveIndex={setActiveIndex}
                                faqItemIndex={index}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
};

export default FAQBlock;