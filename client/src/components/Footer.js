import React from 'react';
import { Link } from 'gatsby';
import { useForm } from 'react-hook-form';

// Components
import Input from '../components/Input';
import Container from './Container';

// Imgs
import FacebookLogo from '../images/fb-icon.png';
import InstaLogo from '../images/ig-icon.png';
import LinkedLogo from '../images/li-icon.png';
import MailIcon from '../images/mail-icon.png';
import PhoneIcon from '../images/phone-icon.png';
import PinIcon from '../images/pin-icon.png';
import TimeIcon from '../images/clock-icon.png';

// Styles
import * as styles from '../styles/modules/Footer.module.scss';

const Footer = () => {
  return (
    <div>
      <Container>
        <section className={styles.footerSection}>
          <div className={styles.subscribeDiv}>
            <h3>Subscribe</h3>
            <p>
              Get info on how to land the perfect job and other helpful tips
            </p>
            <div className={styles.subscribeBtn}>
              {/* <form>
              <Input placeholder='email address'
              
              >

               <button class="button">Subscribe</button>
            </form> */}
            </div>
            <p>Our newsletter is bi-weekly</p>
            <div className={styles.socialLinks}>
              <img src={FacebookLogo} />
              <img src={InstaLogo} />
              <img src={LinkedLogo} />
            </div>
          </div>
          <div className={styles.contactDiv}>
            <h3>Contact</h3>
            <div className={styles.infoText}>
              <img src={MailIcon} />
              <p>info@jsbpartners.com</p>
            </div>
            <div className={styles.infoText}>
              <img src={PhoneIcon} />
              <p>(212) 750-7007</p>
            </div>
            <div className={styles.infoText}>
              <img src={PinIcon} />
              <p>747 Third Ave, 15th Floor, NYC</p>
              {/* <p>New York, New York 10017</p> */}
            </div>
            <div className={styles.infoText}>
              <img src={TimeIcon} />
              <p>25/7 Hustling</p>
            </div>
          </div>
        </section>
        <div className={styles.bottomText}>
          <p>© Copyright - JSB Partners 2022</p>
          <p>JSB Partners, Consultants in Executive Search Since 1998</p>
          <div className={styles.termsLinks}>
            <Link to='/' className={styles.termsLink}>
              Terms of Use
            </Link>
            <Link to='/' className={styles.termsLink}>
              Privacy Policy
            </Link>
            <Link to='/' className={styles.termsLink}>
              Disclaimer
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
