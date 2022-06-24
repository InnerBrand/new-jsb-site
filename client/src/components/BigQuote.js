import React from 'react';
import PropTypes from 'prop-types';
// Components
import Container from 'components/Container';
// Styles
import * as styles from 'styles/modules/BigQuote.module.scss';
// Images
import GuyQuotePic from 'assets/images/quote-1.png';

const BigQuote = () => {
  return (
    <section className={styles.wrapper}>
      <Container className={styles.content}>
        <div className={styles.image}>
          <img src={GuyQuotePic} />
        </div>
        <div className={styles.info}>
          <h4>
            "I will be forever grateful for Liz Fried and her guidance in
            helping me find my next career opportunity. She has extensive
            industry knowledge and a true talent for helping candidates find
            their perfect opportunities. Beyond facilitating interview
            opportunities for highly sought-after positions, she acted as a
            trusted advisor by answering any questions I had with honesty."
          </h4>
          <h5>Dylan, Senior Accountant</h5>
          {/* <Link to='/'> Read more success stories</Link> */}
        </div>
      </Container>
    </section>
  );
};

export default BigQuote;
