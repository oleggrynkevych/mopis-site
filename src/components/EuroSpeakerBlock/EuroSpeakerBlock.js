import './EuroSpeakerBlock.scss';
import euroSpeakerData from './eurospeaker-block-data';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import classNames from 'classnames';

function EuroSpeakerBlock () {

    let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 0,
        initialSlide: 0,
        draggable: true,
        responsive: [
          {
            breakpoint: 1260,
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

    const euroSpeakerPhotoClasses = classNames('eurospeaker-item-photo');

    return (
        <section className='eurospeaker-block'>
            <div className='eurospeaker-block-container'>
                <div className='eurospeaker-block-head'>
                    <h3>Європейські спікери</h3>
                    <div>ТАРИФ PRO & VIP</div>
                </div>

                <div className='eurospeaker-block-info-box'>
                    <Slider {...settings}>
                        {
                            euroSpeakerData.map((speaker, index) => (
                                <div className='eurospeaker-item' key={index}>
                                    <div 
                                        className={classNames(euroSpeakerPhotoClasses, {
                                            speaker1: speaker.nickName === "@masha_myvenice",
                                            speaker2: speaker.nickName === "@mama_wedding_planner",
                                            speaker3: speaker.nickName === "@unjardindelumieres.weddings"
                                        })}
                                    ></div>

                                    <span className='eurospeaker-item-nickname'>{speaker.nickName}</span>
                                    <span className='eurospeaker-item-name'>{speaker.name}</span>
                                    <p>{speaker.text}</p>
                                    <span className='eurospeaker-item-theme-title'>Тема</span>
                                    <span className='eurospeaker-item-theme'>{speaker.theme}</span>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </section>
    )
};

export default EuroSpeakerBlock;