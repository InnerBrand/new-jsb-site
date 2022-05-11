import React from 'react';

// Styles
import * as styles from 'styles/modules/MadeOf.module.scss';

// Imgs
import cpa1 from 'assets/images/cpa1.png';
import cpa2 from 'assets/images/cpa2.png';
import cpa3 from 'assets/images/cpa3.png';

const MadeOf = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h3>
            Born of CPAs, JSB Partners understands the sector from the inside
            out
          </h3>
          <h5>
            Over 278 years of collective industry experience, intuition and
            insight
          </h5>
        </div>
        <div className={styles.people}>
          <img className={styles.cpa} src={cpa1} />
          <img className={styles.cpa} src={cpa2} />
          <img className={styles.cpa} src={cpa3} />
        </div>
      </div>
    </section>
  );
};

export default MadeOf;
