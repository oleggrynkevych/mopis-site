import './WelcomeSection.scss';
import KEY_VIDEO_WEBM from '../../videos/key.webm';
import KEY_VIDEO_MP4 from '../../videos/key.mp4';
// import KEY_IMAGE from '../../images/key.svg';
// import KEY_IMAGE_COLOR from '../../images/key-color.svg';
import { Link } from 'react-scroll';
import classNames from 'classnames';

function WelcomeSection () {
    const isSafari = window.safari || /^((?!chrome|android).)*safari/i.test(navigator.userAgent);


    const thirdTextClasses = classNames('welcome-section-third-text', {
        zIndex: !isSafari
    });

    return (
        <section className='welcome-section'>
            <div className='welcome-section-container'>
                <div className='welcome-section-container-text-block'>
                    <div className='welcome-section-text'>
                        <div className='welcome-section-first-text-box'>
                            <h1>курс Аліси Василинки & Mopis</h1>
                            <span>весільний</span>
                        </div>

                        <h2 className='welcome-section-second-text'>найбільш повне і якісне навчання професії весільного організатора</h2>

                        <span className={thirdTextClasses}>організатор</span>

                        <span className='welcome-section-fourth-text'>worldwide</span>

                        {/* {
                            !isSafari ? 
                                <video 
                                    className='welcome-section-key-video' 
                                    src={KEY_VIDEO} 
                                    autoPlay 
                                    muted 
                                    loop 
                                    playsInline
                                >
                                </video> :
                                <img className='welcome-section-key-image' src={KEY_IMAGE_COLOR} alt={'Key'}/>
                        } */}
                        
                        <video 
                            className='welcome-section-key-video' 
                            autoPlay 
                            muted 
                            loop 
                            playsInline
                        >
                            <source type={isSafari ? 'video/mp4' : 'video/webm'} src={isSafari ? KEY_VIDEO_MP4 : KEY_VIDEO_WEBM}/>
                        </video>

                        <Link smooth spy to='program'>
                            <button className='welcome-section-button'>
                                <span>Дивитись програму</span>
                            </button>
                        </Link>

                    </div>

                    <div className='welcome-section-info'>
                        <div className='welcome-section-info-box'>
                            <span>старт</span>
                            <span>11 березня</span>
                        </div>

                        <div className='welcome-section-info-box'>
                            <span>тривалість</span>
                            <span>6 тижнів</span>
                        </div>

                        <div className='welcome-section-info-box'>
                            <span>формат</span>
                            <span>онлайн</span>
                        </div>
                    </div>
                </div>

                <div className='welcome-section-photo'></div>

            </div>
        </section>
    )
}

export default WelcomeSection;