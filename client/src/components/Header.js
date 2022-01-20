import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

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

      <button className={styles.navToggle} onClick={handleToggle}>
        <div className={styles.btnTextWrapper}>
          <p>Menu</p>
          <p>Close</p>
        </div>
        <div className={styles.burgerWrapper}>
          <span />
          <span />
        </div>
      </button>

      <nav className={styles.nav}>
        <div className={`${styles.menuNav}`}>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
        </div>
      </nav>
      <img src={logo} className={styles.logo} />
    </header>
  );
};

export default Header;
