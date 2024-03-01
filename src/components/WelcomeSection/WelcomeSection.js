import './WelcomeSection.scss';
import KEY from '../../video/key.webm';
import { Link } from 'react-scroll';

function WelcomeSection () {
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

                        <span className='welcome-section-third-text'>організатор</span>

                        <span className='welcome-section-fourth-text'>worldwide</span>

                        {/* <img className='welcome-section-key-image' src={KEY} alt={'Key'}/> */}

                        <video className='welcome-section-key-video' src={KEY} autoPlay muted loop></video>

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