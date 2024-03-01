import './DescriptionBlock.scss';
import descriptionData from './description-data';
import DescriptionItem from './DescriptionItem/DescriptionItem';

function DescriptionBlock () {
    return (
        <section className='description-block' id='description'>
            <div className='description-block-container'>
                <div className='description-block-title'>
                    <span>цей курс для</span>
                    <div></div>
                </div>

                <div className='description-block-text'>
                    {
                        descriptionData.map((item, index) => (
                            <DescriptionItem
                                key={index}
                                mainText={item.mainText}
                                number={(index + 1).toString().padStart(2, '0')}
                                description={
                                    item.mainText === "Новачків" ? (
                                        <>
                                            <span>дівчата, які не мають досвіду, але <br/> мріють організовувати весілля в <br/> Україні та Європі</span>
                                        </>
                                    ) : (
                                        item.mainText === "Профі" ? (
                                            <>
                                               <span>хто хоче вийти на новий рівень, <br/> отримувати міжнародні проєкти чи <br/> розвивати своє агентство</span>
                                            </>
                                        ) : (
                                            item.description
                                        )
                                    )
                                }
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
};

export default DescriptionBlock;