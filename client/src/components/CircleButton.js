import React, { useState, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import PropTypes from 'prop-types';
// SVG
import FancyArrowRight from '../images/svg/fancy-arrow-right.inline.svg';
// Styles
import * as styles from '../styles/modules/CircleButton.module.scss';

const CircleButton = ({ ctaText, showArrow, ease }) => {
  const buttonRef = useRef(null);
  const circleRef = useRef(null);
  const ctaTextRef = useRef(null);

  useLayoutEffect(() => {
    buttonRef.current.addEventListener('mousemove', handleMouseMove);
    buttonRef.current.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      buttonRef.current.removeEventListener('mousemove', handleMouseMove);
      buttonRef.current.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [ease]);

  function handleMouseMove(e) {
    const bcr = e.target.getBoundingClientRect();
    const xPos = bcr.x;
    const yPos = bcr.y;
    const w = bcr.width;
    const h = bcr.height;

    // Get mouse position relative to window
    const mouseWindowY = e.clientY;
    const mouseWindowX = e.clientX;

    // Get mouse position relative to project - center point being zero
    const mouseProjectX = Math.floor(mouseWindowX - xPos - w / 2);
    const mouseProjectY = Math.floor(mouseWindowY - yPos - h / 2);

    // Get mouse position on project card
    const mousePercentageX =
      Math.round(1000 * (mouseProjectX / (w / 2))) / 1000;
    const mousePercentageY =
      Math.round(1000 * (mouseProjectY / (h / 2))) / 1000;

    const circleMoveX = 12 * mousePercentageX;
    const circleMoveY = 12 * mousePercentageY;
    const textMoveX = 6 * mousePercentageX;
    const textMoveY = 6 * mousePercentageY;

    gsap.to(circleRef.current, {
      x: -circleMoveX,
      y: -circleMoveY,
      scale: 1,
    });
    gsap.to(ctaTextRef.current, {
      x: textMoveX,
      y: textMoveY,
      ease,
    });
  }

  function handleMouseLeave() {
    gsap.to(circleRef.current, { x: 0, y: 0, scale: 0.8, ease });
    gsap.to(ctaTextRef.current, { x: 0, y: 0, ease });
  }

  return (
    <button className={styles.button} type='submit' ref={buttonRef}>
      <div className={styles.circle} ref={circleRef} />
      <span ref={ctaTextRef}>
        {ctaText} {showArrow && <FancyArrowRight />}
      </span>
    </button>
  );
};

CircleButton.defaultProps = {
  ease: 'Power3.easeOut',
};

export default CircleButton;
