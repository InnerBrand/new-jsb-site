import React from 'react';
import PropTypes from 'prop-types';
// Components
import Container from 'components/Container';
// Styles
import * as styles from 'styles/modules/BigQuote.module.scss';
// Images
import LadyQuotePic from 'assets/images/quote-2.png';

const LadyQuote = () => {
  return (
    <section className={styles.wrapper}>
      <Container className={styles.content}>
        <div className={styles.image}>
          <img src={LadyQuotePic} />
        </div>
        <div className={styles.info}>
          <h4>
            "I’ve had the pleasure of working with Eika Ng over the last 10
            years. She’s helped me progress throughout my career, always looking
            out for my best interest and is always sincere, straightforward,
            professional and thoughtful. She genuinely cares for your success
            and in finding the right fit and role for you. Thank you Eika!"
          </h4>
          <h5>- Jhoanna</h5>
          {/* <Link to='/'> Read more success stories</Link> */}
        </div>
      </Container>
    </section>
  );
};

export default LadyQuote;
