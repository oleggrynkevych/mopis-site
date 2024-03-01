import './PriceItem.scss';
import classNames from 'classnames';

function PriceItem (props) {

    // Styles

    const descriptionTextClasses = classNames('price-item-description-text');

    const priceClasses = classNames ('price-item-value', {
        hidden: props.prevPrice === 0
    })

    return (
        <div className='price-item'>
            <div className='price-item-title'>
                <h4>{props.name}</h4>
                <span>{props.addText}</span>
            </div>

            <div className='price-item-description'>
                {
                    props.avlServices.map((service, index) => (
                            <span 
                                className={classNames(descriptionTextClasses, {
                                    pro: (props.name === "Pro" || props.name === "VIP") && service === "домашні завдання з перевіркою"
                                })}
                                key={index}
                            >{service}</span>
                    ))
                }

                {
                    props.notAvlServices.map((service, index) => (
                        <span 
                            className='price-item-description-text-opacity' 
                            key={index}
                        >{service}</span>
                    ))
                }
            </div>

            <div className='price-item-value-box'>
                <div className={priceClasses}>
                    <span>${props.price}</span>
                    <span>${props.prevPrice}</span>
                </div>
                <span className='price-item-value-text'>доступна оплата частинами</span>
            </div>

            <a className='price-item-button-link' href={props.payLink} target='_blank' rel='noreferrer'>
                <button className='price-item-button'>Оплатити</button>
            </a>

            <a href='https://secure.wayforpay.com/button/b993c08b87542' target='_blank' rel='noreferrer'>
                <div className='price-item-reservation'>
                    <span>Забронювати місце за $25</span>
                    <div></div>
                </div>
            </a>

            {/* <a href='https://t.me/mopisschool_support' target='_blank' rel='noreferrer'>
                <div className='price-item-reservation'>
                    <span>Оформити внутрішнє розтермінування</span>
                    <div></div>
                </div>
            </a> */}
            
        </div>
    )
};

export default PriceItem;