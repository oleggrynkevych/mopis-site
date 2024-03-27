import './PriceBlock.scss';
import {priceData, mentoringData} from './price-data';
import PriceItem from './PriceItem/PriceItem';

function PriceBlock () {
    return (
        <section className='price-block' id='price'>
            <div className='price-block-container'>
                <h3>Тарифи</h3>

                <div className='price-block-info-box'>
                    {
                        priceData.map((item, index) => (
                            <PriceItem 
                                key={index}
                                name={item.name}
                                addText={item.addText}
                                price={item.price}
                                prevPrice={item.prevPrice}
                                payLink={item.payLink}
                                avlServices={item.avlServices}
                                notAvlServices={item.notAvlServices}
                            />
                        ))
                    }
                </div>

                <div className='price-block-mentoring'>
                    <div className='price-block-mentoring-title-box'>
                        <div className='price-block-mentoring-title'>
                            <h4>Менторство</h4>
                            <h5>3 місця</h5>
                        </div>
                        
                        <a href='https://secure.wayforpay.com/button/b0f8a2877f83d' target='_blank' rel='noreferrer'>
                            <button>
                                <span>Оплатити</span>
                            </button>
                        </a>
                    </div>

                    <div className='price-block-mentoring-info-box'>
                        <div className='price-block-mentoring-info'>
                            {
                                mentoringData.map((text, index) => (
                                    <span key={index}>{text}</span>
                                ))
                            }
                        </div>

                        <div className='price-block-mentoring-price'>
                            <span>$3,500</span>
                            <span>доступна оплата частинами</span>
                        </div>
                    </div>
                </div>

                <a className='price-block-question-button' href='https://t.me/mopisschool_support' target='_blank' rel='noreferrer'>
                    <button>
                        <span>задати питання</span>
                    </button>
                </a>
            </div>
        </section>
    )
};

export default PriceBlock;