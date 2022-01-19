import React from 'react';
import { Link } from 'gatsby';

import * as styles from '../styles/modules/Footer.module.scss'

const Footer = () => {
  return (
    <div>
      <section className={styles.footerSection}>
        <div className='subscribe-div'>
          <h3>Subscribe</h3>
          <p>Get info on how to land the perfect job and other helpful tips</p>
          <form>enter email</form>
          <p>Our newsletter is bi-weekly</p>
          <div className='social-links'>
            <Link to='https://instagram.com'>IG</Link>
            <Link to='https://facebook.com'>FB</Link>
            <Link to='https://linkedin.com'>LI</Link>
          </div>
        </div>
        <div className='contact-div'>
          <h3>Contact</h3>
          <p>info@jsbpartners.com</p>
          <p>(212) 750-7007</p>
          <p>747 Third Ave, 15th Floor</p>
          <p>New York, New York 10017</p>
          <p>Monday - Friday</p>
          <p>8am - 6pm</p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
