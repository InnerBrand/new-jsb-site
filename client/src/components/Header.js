import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

// components
import Container from './Container';
import FancyArrowRight from '../images/svg/fancy-arrow-right.inline.svg';

// logo
import logo from '../images/jsb-logo.png';

// styles
import * as styles from '../styles/modules/Header.module.scss';

const Header = props => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    console.log(handleToggle)
    setNavbarOpen(state => !state);
  };

  return (
    
      <header className={`${styles.header} ${navbarOpen ? styles.menuIsOpen : ''}`}>
          <div className={styles.overlayWrapper}>
            <div className={styles.circleWrapper}>
              <div className={styles.circle} />
            </div>
            <div className={styles.overlay} />
          </div>
        <Container className={styles.container}>
          <button className={styles.navToggle} onClick={handleToggle}>
            <div className={styles.btnTextWrapper}>
              <div className={styles.btnTextWrapperInner}>
              <p>Menu</p>
              <p>Close</p>
              </div>
            </div>
            <div className={styles.burgerWrapper}>
            <span />
            <span />
            </div>
          </button>

          <div className={styles.navWrapper}>
            <nav className={styles.nav}>
              <div className={styles.menuNav}> 
                <div className={styles.menuNavLinks}>
                  <Link to={"https://jobs.vivahr.com/6965-aktiv-insight/jobs"} className={styles.navItem}>Job listings<FancyArrowRight className={styles.linkArrow}/></Link>
                  <Link to='/' className={styles.navItem}>Looking for talent?<FancyArrowRight className={styles.linkArrow}/></Link>
                  <Link to='/about' className={styles.navItem}>Success stories<FancyArrowRight className={styles.linkArrow}/></Link>
                  <Link to='/team' className={styles.navItem}>Meet your experts<FancyArrowRight className={styles.linkArrow}/></Link>
                  <Link to='/submit-resume' className={styles.navItem}>Services<FancyArrowRight className={styles.linkArrow}/></Link>
                </div>
                <div className={styles.menuMoreInfo}>
                  <div className={styles.menuSecondaryLinks}>
                    <Link to='/about' className={styles.navItem}>Contact us<FancyArrowRight className={styles.linkArrow}/></Link>
                    <Link to='/about' className={styles.navItem}>About the company<FancyArrowRight className={styles.linkArrow}/></Link>
                    <Link to='/submit-resume' className={styles.navItem}>Send us your resume<FancyArrowRight className={styles.linkArrow}/></Link>
                    <Link to='/submit-resume' className={styles.navItem}>Careers at JSB<FancyArrowRight className={styles.linkArrow}/></Link>
                  </div>
                  <div className={styles.menuAddress}>
                    <p>New York</p>
                    <p>212-750-7007</p>
                    <p>info@jsbpartners.com</p>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div className="logoWrapper">
            <img src={logo} className={styles.logo} />
          </div>
        </Container>
    </header>
  );
};

export default Header;
