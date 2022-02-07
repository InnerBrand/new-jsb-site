import React from 'react';
import { Link } from 'gatsby';

// Styles
import * as styles from '../styles/modules/Quote.module.scss'

// Images
import TestPic from '../images/testimonial-person-1.png'

const Quote = () => {
  return (
    <section className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.image}>
            <img src={TestPic} />
          </div>
          <div className={styles.info}>
            <h3>
              JSB team has guided me over the last 5 years, helping me find two of my previous roles.
            </h3>
            <h3>
              John Stanson | CFO at Yahia
            </h3>
            <Link to="/"> Read more success stories</Link>

          </div>
        </div>
    
    </section>
  
  )
};

export default Quote;
