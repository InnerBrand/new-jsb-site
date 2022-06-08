import React from 'react';
import { Link } from 'gatsby';
import { useForm } from 'react-hook-form';
// Components
import Input from 'components/Input';
import Container from 'components/Container';
// SVG
import FacebookIcon from 'assets/svg/facebook.inline.svg';
import InstagramIcon from 'assets/svg/instagram.inline.svg';
import LinkedInIcon from 'assets/svg/linkedin.inline.svg';
import {
  ClockIcon,
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from '@heroicons/react/outline';

// Styles
import * as styles from '../styles/modules/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <section className={styles.footerSection}>
        <Container className={styles.container}>
          <div className={styles.subscribeDiv}>
            <h3>Follow On Social</h3>
            {/* <p>
              Get info on how to land the perfect job and other helpful tips
            </p> */}
            <div className={styles.subscribeBtn}>
              {/* <form>
                <Input placeholder='email address'
                
                >

                <button class="button">Subscribe</button>
              </form> */}
            </div>
            {/* <p>Our newsletter is bi-weekly</p> */}
            <div className={styles.socialLinks}>
              <a
                href='https://facebook.com/jsbpartners'
                title='Visit us on Facebook'
                target='_blank'
                rel='noreferrer'>
                <FacebookIcon />
              </a>
              <a
                href='https://instagram.com/jsbpartners'
                title='Visit us on Instagram'
                target='_blank'
                rel='noreferrer'>
                <InstagramIcon />
              </a>
              <a
                href='https://www.linkedin.com/company/jsb-partners'
                title='Visit us on Linkedin'
                target='_blank'
                rel='noreferrer'>
                <LinkedInIcon />
              </a>
            </div>
          </div>
          <div className={styles.contactDiv}>
            <h3>Contact</h3>
            <div className={styles.infoText}>
              <MailIcon className={styles.icon} />
              <a
                className={styles.text}
                href='mailto:yourexpert@jsbpartners.com'
                target='_blank'
                rel='noreferrer'>
                yourexpert@jsbpartners.com
              </a>
            </div>
            <div className={styles.infoText}>
              <PhoneIcon className={styles.icon} />

              <a className={styles.text} href='tel:2127507007'>
                (212) 750-7007
              </a>
            </div>
            <div className={styles.infoText}>
              <LocationMarkerIcon className={styles.icon} />
              <a
                className={styles.text}
                href='https://goo.gl/maps/x3FCj9JBc6Z2UNif9'
                target='_blank'
                rel='noreferrer'>
                747 Third Ave, 15th Floor, NYC
              </a>
              {/* <p>New York, New York 10017</p> */}
            </div>
            <div className={styles.infoText}>
              <ClockIcon className={styles.icon} />
              <p className={styles.text}>25/7 Hustling</p>
            </div>
          </div>
        </Container>
      </section>
      <div className={styles.bottomText}>
        <Container className={styles.container}>
          <p>© Copyright - JSB Partners 2022</p>
          <p>JSB Partners, Consultants in Executive Search Since 1998</p>
          <div className={styles.termsLinks}>
            <Link to='/' className={styles.termsLink}>
              Terms of Use
            </Link>
            <span>|</span>
            <Link to='/' className={styles.termsLink}>
              Privacy Policy
            </Link>
            <span>|</span>
            <Link to='/' className={styles.termsLink}>
              Disclaimer
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
