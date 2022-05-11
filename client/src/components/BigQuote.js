import React from 'react';
import PropTypes from 'prop-types';
// Components
import Container from 'components/Container';
// Styles
import * as styles from 'styles/modules/BigQuote.module.scss';
// Images
import TestPic from 'assets/images/quote-1.png';

const BigQuote = () => {
  return (
    <section className={styles.wrapper}>
      <Container className={styles.content}>
        <div className={styles.image}>
          <img src={TestPic} />
        </div>
        <div className={styles.info}>
          <h4>
            "It was an absolute pleasure working with Eva to find a new role."
          </h4>
          <h5>Chris, Senior Accountant</h5>
          {/* <Link to='/'> Read more success stories</Link> */}
        </div>
      </Container>
    </section>
  );
};

export default BigQuote;
