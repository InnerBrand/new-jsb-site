import React from 'react';
import PropTypes from 'prop-types';
// Components
import Container from 'components/Container';
// Styles
import * as styles from 'styles/modules/BigQuote.module.scss';
// Images
import LadyQuotePic from 'assets/images/quote-2.png';

const LadyQuote = () => {
  return (
    <section className={styles.wrapper}>
      <Container className={styles.content}>
        <div className={styles.image}>
          <img src={LadyQuotePic} />
        </div>
        <div className={styles.info}>
          <h4>
            "Their entire team has shown genuine care for every step of my
            career journey."
          </h4>
          <h5>Sarah, Financial Analyst</h5>
          {/* <Link to='/'> Read more success stories</Link> */}
        </div>
      </Container>
    </section>
  );
};

export default LadyQuote;
