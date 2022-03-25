import React from 'react';
import PropTypes from 'prop-types';
// Components
import Container from 'components/Container';
// Styles
import * as styles from 'styles/modules/CardSlider.module.scss';

const CardSlider = ({
  bigHeading,
  cardData,
  className,
  eyebrow,
  headerHighlight,
  headerPre,
}) => {
  return (
    <section className={[styles.wrapper, className ? className : ''].join(' ')}>
      <Container>
        {bigHeading && (
          <h1 className={`jumbo ${styles.bigHeading}`}>{bigHeading}</h1>
        )}
      </Container>
      <Container>
        <div className={styles.titlesWrapper}>
          <h6 className={styles.eyebrow}>{eyebrow}</h6>
          <h3 className={styles.header}>
            {headerPre + ' '}
            <span>{headerHighlight}</span>
          </h3>
        </div>
      </Container>
      <div className={styles.slider}>
        <div className={styles.sliderInner}>
          {cardData.map(card => (
            <div className={styles.card}>{card}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

CardSlider.propTypes = {};

export default CardSlider;
