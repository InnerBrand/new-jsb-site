import React from 'react';
import PropTypes from 'prop-types';

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';

// Styles
import '../styles/global/index.scss';
import * as styles from '../styles/modules/Layout.module.scss';
import Container from './Container';

const Layout = props => {
  const { children, header, footer } = props;

  return (
    <>
      {header && <Header />}
      {children}
      {footer && <Footer />}
    </>
  );
};

Layout.defaultProps = {
  header: true,
  footer: true,
};

Layout.propTypes = {
  header: PropTypes.bool.isRequired,
};

export default Layout;