import './RespondBlock.scss';
import respondData from './respond-data';
import RespondItem from './RespondItem/RespondItem';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useState } from 'react';

function RespondBlock () {
    let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        draggable: true,
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll:1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    }

    const [activeIndex, setActiveIndex] = useState();

    return (
        <section className='respond-block' id='respond'>
            <div className='respond-block-container'>
                <h3>Відгуки</h3>

                <div className='respond-block-info-box'>
                    <Slider {...settings}>
                        {
                            respondData.map((respond, index) => (
                                <RespondItem
                                    key={index}
                                    name={respond.name}
                                    nickName={respond.nickName}
                                    link={respond.link}
                                    text={respond.text}
                                    identifier={index + 1}
                                    isActiveIndex={index === activeIndex}
                                    setActiveIndex={setActiveIndex}
                                    respondIndex={index}
                                />
                            ))
                        }
                     </Slider>
                </div>
            </div>
        </section>
    )
};

export default RespondBlock;