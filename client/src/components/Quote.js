import React from 'react';
import {Link} from 'gatsby';
// Styles
import * as styles from 'styles/modules/Quote.module.scss';
// Images
import TestPic from 'assets/images/quote-1.png';

const Quote = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
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
      </div>
    </section>
  );
};

export default Quote;
