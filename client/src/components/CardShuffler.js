import React, {useEffect, useMemo, useState} from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
// Styles
import * as styles from 'styles/modules/CardShuffler.module.scss';
// SVG
import FancyArrowRight from 'assets/svg/fancy-arrow-right.inline.svg';

const CardShuffler = ({className, data}) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const cardsRef = useMemo(() => data.map(_ => React.createRef()), []);

  useEffect(() => {
    cardsRef[0].current.style.zIndex = 1;
  });

  function handlePrev() {
    setSlideIndex(currIndex => {
      return currIndex - 1;
    });
  }

  function handleNext() {
    setSlideIndex(currIndex => currIndex + 1);
  }

  function topToBottom(el) {}

  return (
    <div className={styles.wrapper}>
      {data.map(({prefix, highlight, suffix, _key}, i) => (
        <div
          key={_key}
          ref={cardsRef[i]}
          className={[styles.card, slideIndex === i ? styles.active : ''].join(
            ' '
          )}>
          <span className={styles.prefix}>{prefix}</span>
          <span className={styles.highlight}>{highlight}</span>
          <span className={styles.suffix}>{suffix}</span>
        </div>
      ))}
      <div className={styles.controllerWrapper}>
        <button
          className={styles.control}
          data-action='next'
          disabled={slideIndex === data.length - 1}
          onClick={handleNext}
          aria-label='Next card'>
          <FancyArrowRight />
        </button>
        <button
          className={styles.control}
          data-action='prev'
          disabled={slideIndex === 0}
          onClick={handlePrev}
          aria-label='Previous card'>
          <FancyArrowRight />
        </button>
      </div>
    </div>
  );
};

CardShuffler.propTypes = {};

export default CardShuffler;
