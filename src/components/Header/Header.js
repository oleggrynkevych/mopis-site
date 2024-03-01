import './Header.scss';
import Logo from './Logo';
import navData from './nav-data';
import socialsMediaData from './socials-media-data';
import NavItem from './NavItem/NavItem';
import OpenIcon from '../../images/open-menu-icon.svg';
import CloseIcon from '../../images/close-menu-icon.svg';
import useScrollDirection from '../../hooks/useScrollDirection';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useState , useEffect } from 'react';
import classNames from 'classnames';


function Header () {
    const [openMenu, setOpenMenu] = useState(false);

    const isMobile = useMediaQuery('(max-width: 850px)');

    const handleMenuClick = () => {
        if (isMobile) {
            setOpenMenu(!openMenu);
        } 
    };

    const scrollDirection = useScrollDirection();

    useEffect(() => {
        if (openMenu) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'unset';
        }
    
        return () => {
          document.body.style.overflow = 'unset';
        };
    }, [openMenu]);

    // Styles

    const openIconClasses = classNames('open-icon', {
        open: openMenu
    });

    const closeIconClasses = classNames('close-icon', {
        open: openMenu
    });

    const headerClasses = classNames('header', {
        
        hide: scrollDirection === 'down'
    })

    const containerClasses = classNames('header-container', {
        open: openMenu
    })

    const logoClasses = classNames('header-logo', {
        open: openMenu
    })

    const navigationClasses = classNames('header-navigation', {
        open: openMenu
    });



    return (
        <header className={headerClasses}>
            <div className={containerClasses}>
                <div className={logoClasses}>
                    <Logo/>
                </div>

                <nav className={navigationClasses}>
                    <ul>
                        {
                            navData.map((item, index) => (
                                <NavItem
                                    key={index}
                                    text={item.text}
                                    id={item.id}
                                    handleClick={handleMenuClick}
                                />
                            ))
                        }
                    </ul>

                    <div className='navigation-socials-media-block'>
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
                </nav>

                <img className={openIconClasses} onClick={handleMenuClick} src={OpenIcon} alt={'Open Menu Icon'}/>

                <img className={closeIconClasses} onClick={handleMenuClick} src={CloseIcon} alt={'Close Menu Icon'}/>

            </div>
        </header>
    )
}

export default Header;