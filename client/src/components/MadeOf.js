import React from 'react';
import CircleButton from 'components/CircleButton';

// Styles
import * as styles from 'styles/modules/MadeOf.module.scss';

// Imgs
import cpa2 from 'assets/images/cpa2.png';
import cpa3 from 'assets/images/cpa3.png';
import Container from './Container';

const MadeOf = ({className}) => {
  return (
    <section className={[styles.wrapper, className ? className : ''].join(' ')}>
      <Container>
        <div className={styles.content}>
          <div className={styles.text}>
            <h3 className={styles.heading}>
              Born of CPAs, JSB Partners understands the sector from the inside
              out
            </h3>
            <h5 className={styles.subhead}>
              Over 278 years of collective industry experience, intuition and
              insight
            </h5>
          </div>
          <div className={styles.people}>
            <img className={styles.cpa} src={cpa2} />
            <img className={styles.cpa} src={cpa3} />
          </div>
        </div>
        <div className={styles.circleButton}>
          <CircleButton ctaText='Meet our experts' to='/team' />
        </div>
      </Container>
    </section>
  );
};

export default MadeOf;
