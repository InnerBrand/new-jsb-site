import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';

// Components
import Container from 'components/Container';
import Header from 'components/Header';
import Footer from 'components/Footer';

// Styles
import 'styles/global/index.scss';
import * as styles from 'styles/modules/Layout.module.scss';

const Layout = props => {
  const {children, header, footer, theme} = props;

  return (
    <>
      <Helmet>
        <body className={`theme_${theme}`} />
      </Helmet>
      {header && <Header />}
      {children}
      {footer && <Footer />}
    </>
  );
};

Layout.defaultProps = {
  header: true,
  footer: true,
  theme: 'light',
};

Layout.propTypes = {
  header: PropTypes.bool.isRequired,
  theme: PropTypes.oneOf(['light', 'dark']),
};

export default Layout;
