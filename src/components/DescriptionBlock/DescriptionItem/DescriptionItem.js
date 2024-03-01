import './DescriptionItem.scss';

function DescriptionItem (props) {
    return (
        <div className='description-item'> 
            <div className='description-item-main'>
                <span>{props.number}</span>
                <span>{props.mainText}</span>
            </div>

            <span className='description-item-text'>{props.description}</span>
        </div>
    )
};

export default DescriptionItem;