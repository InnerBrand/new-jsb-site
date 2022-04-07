import React from 'react';
import PropTypes from 'prop-types';
// Components
import CardShuffler from './CardShuffler';
import Container from './Container';
// Styles
import * as styles from 'styles/modules/FactsPlank.module.scss';

const FactsPlank = ({eyebrow, headline, facts}) => {
  console.log({eyebrow, headline});
  return (
    <section className={styles.wrapper}>
      <Container>
        {(eyebrow || headline) && (
          <div className={styles.headingWrapper}>
            {eyebrow && <h6 className={styles.eyebrow}>{eyebrow}</h6>}
            {headline && <h2 className={styles.headline}>{headline}</h2>}
          </div>
        )}
        <div className={styles.cardShuffler}>
          <CardShuffler data={facts} />
        </div>
      </Container>
    </section>
  );
};

FactsPlank.propTypes = {};

export default FactsPlank;
