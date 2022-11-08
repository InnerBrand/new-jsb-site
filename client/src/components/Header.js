import React, { useEffect, useRef, useState } from 'react';
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
    setNavbarOpen(state => !state);
  };

  useEffect(() => {
    navbarOpen
      ? disableBodyScroll(scrollRef.current)
      : enableBodyScroll(scrollRef.current);
    return () => {
      clearAllBodyScrollLocks(scrollRef.current);
    };
  }, [navbarOpen]);

  return (
    <header
      className={`${styles.header} ${navbarOpen ? styles.menuIsOpen : ''}`}
    >
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
                  <Link to='/about' className={styles.navItem}>
                    About
                  </Link>
                  <Link to='/services' className={styles.navItem}>
                    Services
                    <FancyArrowRight className={styles.linkArrow} />
                  </Link>
                  <Link to='/team' className={styles.navItem}>
                    Meet your experts
                    <FancyArrowRight className={styles.linkArrow} />
                  </Link>
                  <Link to='/looking-for-talent' className={styles.navItem}>
                    Looking for talent?
                    <FancyArrowRight className={styles.linkArrow} />
                  </Link>
                  <div>
                    <a
                      className={styles.navItem}
                      href='https://jobs.jsbpartners.com'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Career Opportunities
                      <FancyArrowRight className={styles.linkArrow} />
                    </a>
                  </div>
                  <Link to='/success' className={styles.navItem}>
                    Success stories
                    <FancyArrowRight className={styles.linkArrow} />
                  </Link>
                  {/* <Link
                    to={''}
                    // to={'https://jobs.vivahr.com/6965-aktiv-insight/jobs'}
                    className={styles.navItem}>
                    Job listings
                    <FancyArrowRight className={styles.linkArrow} />
                  </Link> */}
                </div>
                <div className={styles.menuMoreInfo}>
                  <div className={styles.menuSecondaryLinks}>
                    <Link to='/submit-resume' className={styles.navItem}>
                      Send us your resume
                    </Link>
                  </div>
                  <div className={styles.menuAddress}>
                    <p className={styles.navItem}>
                      <strong>New York</strong>
                    </p>
                    <a className={styles.navItem} href='tel:212-750-7007'>
                      212-750-7007
                    </a>
                    <p className={styles.navItem}>
                      <a
                        className={styles.text}
                        href='mailto:yourexpert@jsbpartners.com'
                        target='_blank'
                        rel='noreferrer'
                      >
                        yourexpert@jsbpartners.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className={styles.logoWrapper}>
          <Logo className={styles.logo} />
        </div>
      </Container>
    </header>
  );
};

export default Header;
