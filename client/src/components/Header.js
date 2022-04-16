import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';
// Components
import Container from 'components/Container';
// SVG
import Logo from 'components/Logo';
import FancyArrowRight from 'assets/svg/fancy-arrow-right.inline.svg';
// Styles
import * as styles from 'styles/modules/Header.module.scss';

const Header = props => {
  const scrollRef = useRef(null);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    console.log(handleToggle);
    setNavbarOpen(state => !state);
  };

  useEffect(() => {
    navbarOpen
      ? disableBodyScroll(scrollRef.current)
      : enableBodyScroll(scrollRef.current);
    return () => {
      console.log('header cleanup');
      clearAllBodyScrollLocks(scrollRef.current);
    };
  }, [navbarOpen]);

  return (
    <header
      className={`${styles.header} ${navbarOpen ? styles.menuIsOpen : ''}`}>
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
            <div className={styles.menuWrapper}>
              <div className={styles.scrollContainer} ref={scrollRef}>
                <div className={styles.menuNavLinks}>
                  <Link
                    to={'https://jobs.vivahr.com/6965-aktiv-insight/jobs'}
                    className={styles.navItem}>
                    Job listings
                    <FancyArrowRight className={styles.linkArrow} />
                  </Link>
                  <Link to='/services' className={styles.navItem}>
                    Looking for talent?
                    <FancyArrowRight className={styles.linkArrow} />
                  </Link>
                  <Link to='/success' className={styles.navItem}>
                    Success stories
                    <FancyArrowRight className={styles.linkArrow} />
                  </Link>
                  <Link to='/team' className={styles.navItem}>
                    Meet your experts
                    <FancyArrowRight className={styles.linkArrow} />
                  </Link>
                  <Link to='/services' className={styles.navItem}>
                    Services
                    <FancyArrowRight className={styles.linkArrow} />
                  </Link>
                </div>
                <div className={styles.menuMoreInfo}>
                  <div className={styles.menuSecondaryLinks}>
                    <Link to='/about' className={styles.navItem}>
                      About the company
                    </Link>
                    <Link to='/submit-resume' className={styles.navItem}>
                      Send us your resume
                    </Link>
                    <Link to='/submit-resume' className={styles.navItem}>
                      Careers at JSB
                    </Link>
                  </div>
                  <div className={styles.menuAddress}>
                    <p className={styles.navItem}>
                      <strong>New York</strong>
                    </p>
                    <a className={styles.navItem} href='tel:212-750-7007'>
                      212-750-7007
                    </a>
                    <p className={styles.navItem}>info@jsbpartners.com</p>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className={styles.logoWrapper}>
          <Logo className={styles.logo} />
          <p className={styles.logoText}>Executive Search Experts</p>
        </div>
      </Container>
    </header>
  );
};

export default Header;
