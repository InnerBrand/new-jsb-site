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
            "Joe goes above and beyond helping our company find the best talent
            out there"
          </h4>
          <h5>John, hiring executive & repeat client</h5>
          {/* <Link to='/'> Read more success stories</Link> */}
        </div>
      </Container>
    </section>
  );
};

export default BigQuote;