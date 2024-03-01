import './Footer.scss';
import socialsMediaData from '../Header/socials-media-data';
import FooterLogo from '../../images/footer-logo.svg';
import { Link } from 'react-router-dom';

function Footer () {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className='footer-container-head'>
                    <span className='footer-container-head-text'>Залишились питання або хочеш проконсультуватись щодо навчання? Напиши нам</span>
                    <div className='footer-container-buttons'>
                        {
                            socialsMediaData.map((media, index) => (
                                <a href={media.link} target='blank' key={index}>
                                    <div className='social-media-button'>
                                        <div>
                                            <img src={media.icon} alt={media.description}/>
                                        </div>

                                        <span>{media.name}</span>
                                    </div>
                                </a>
                            ))
                        }
                    </div>
                </div>

                <div className='footer-container-info'>
                    <span className='footer-container-info-rights'>©MOPIS 2023, ВСІ ПРАВА ЗАХИЩЕНІ</span>

                    <div className='footer-container-info-policy'>
                        <Link to='/privacy-policy'>
                            <div className='footer-container-info-policy-item'>
                                <span>ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ</span>
                                <div></div>
                            </div>
                        </Link>
                        
                        <Link to='/public-offer'>
                            <div className='footer-container-info-policy-item'>
                                <span>ПУБЛІЧНА ОФЕРТА</span>
                                <div></div>
                            </div>
                        </Link>
                    </div>

                    <div className='footer-container-info-dev'>
                        <span className='footer-container-info-dev-text'>DESIGN & DEV</span>

                        <a href='https://www.instagram.com/vania_gun/' target='blank'>
                            <div className='footer-container-info-dev-link'>
                                <span>IVAN VERGUN</span>
                                <div></div>
                            </div>
                        </a>
                    </div>
                </div>

                <img className='footer-logo' src={FooterLogo} alt={'Footer Logo'}/>

                <div className='footer-container-bottom'>
                    <div className='footer-container-bottom-item'>
                        <span>ФОП</span>
                        <span>Василинка А.М.</span>
                    </div>

                    <div className='footer-container-bottom-item'>
                        <span>ЄДРПОУ</span>
                        <span>3322505203</span>
                    </div>

                    <div className='footer-container-bottom-item'>
                        <span>IBAN</span>
                        <span>UA483220010000026009310011116</span>
                    </div>

                    <div className='footer-container-bottom-item'>
                        <span>EMAIL</span>
                        <span>mopis.agency@gmail.com</span>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;