import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
// Styes
import * as styles from 'styles/modules/BigTextPillsPlank.module.scss';
import Container from './Container';

const BigTextPillsPlank = ({ imageData }) => {
  const barryImageData = imageData[0];
  const josephImageData = imageData[1];
  const barryImg = getImage(barryImageData.childImageSharp);
  const josephImg = getImage(josephImageData.childImageSharp);

  return (
    <section className={styles.wrapper}>
      <Container>
        <div className={[styles.imageWrapper, styles.left].join(' ')}>
          <GatsbyImage className={styles.image} image={josephImg} />
          <div className={styles.titleWrapper}>
            <p>Joseph Barr Co-Founder</p>
            <p>Co-Founder, CPA</p>
          </div>
        </div>
        <p className={styles.text}>
          “Our relationships and understanding of the industry give us access to
          jobs no one else knows about, so we find the next match between people
          and businesses"
        </p>

        <div className={[styles.imageWrapper, styles.right].join(' ')}>
          <GatsbyImage className={styles.image} image={barryImg} />
          <div className={styles.titleWrapper}>
            <p>Barry Taitz</p>
            <p>Co-Founder, CPA</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

BigTextPillsPlank.propTypes = {};

export default BigTextPillsPlank;
