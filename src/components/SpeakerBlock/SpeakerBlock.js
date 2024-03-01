import './SpeakerBlock.scss';
import speakerData from './speaker-block-data';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import classNames from 'classnames';

function SpeakerBlock () {

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

    // Styles

    const speakerPhotoClasses = classNames('speaker-item-photo');

    return (
        <section className='speaker-block'>
            <div className='speaker-block-container'>
                <h3>Запрошені СПІКЕРИ</h3>

                <div className='speaker-block-info-box'>
                    <Slider {...settings}>
                        {
                            speakerData.map((speaker, index) => (
                                <div className='speaker-item' key={index}>
                                    <div 
                                        className={classNames(speakerPhotoClasses, {
                                            speaker1: index + 1 === 1,
                                            speaker2: index + 1 === 2,
                                            speaker3: index + 1 === 3,
                                            speaker4: index + 1 === 4,
                                            speaker5: index + 1 === 5,
                                            speaker6: index + 1 === 6,
                                            speaker7: index + 1 === 7,
                                            speaker8: index + 1 === 8,
                                            speaker9: index + 1 === 9,
                                            // speaker10: index + 1 === 10,
                                        })}
                                    ></div>

                                    <span className='speaker-item-nickname'>{speaker.nickName}</span>
                                    <span className='speaker-item-name'>{speaker.name}</span>
                                    <p>{speaker.text}</p>
                                    <span className='speaker-item-theme-title'>Тема</span>
                                    <span className='speaker-item-theme'>{speaker.theme}</span>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </section>
    )
};

export default SpeakerBlock;