import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby';
// SVG
import SVG from 'assets/svg/jsb-logo.inline.svg';
// Styles
import * as styles from 'styles/modules/Logo.module.scss';

const Logo = () => {
  return (
    <Link title='JSB Logo' to='/' className={styles.linkWrapper}>
      <SVG />
    </Link>
  );
};

Logo.propTypes = {
  inverted: PropTypes.bool,
};

export default Logo;
