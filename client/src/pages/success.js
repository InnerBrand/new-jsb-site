import React from 'react';

// Components
import Layout from 'components/Layout';
import Container from 'components/Container';

// Styles
import * as styles from 'styles/modules/pages/SuccessPage.module.scss';

// Imgs
import Stories from 'assets/images/sstories.png';

const SuccessPage = () => {
  return (
    <Layout>
      <Container>
        <section className={styles.section}>
          <div className={styles.content}>
            <h1 className={styles.ready}>ready</h1>
            <p className={styles.adjective}>Adjective</p>
            <p className={styles.define}>
              1. Prepared mentally or physically for immediate action.
            </p>
          </div>
        </section>
        <div className={styles.stories}>
          <div>
            <h3>
              JSB Partners was hired by a Las Vegas casino magnet to find a CFO
              for their Family Office. Within in 30 days of launching the search
              JSB identified the person who eventually was hired as their CFO.
              JSB negotiated the compensation package along with full
              re-location. We are pleased to state that our placement is still
              at the firm today ten years after our placement.
            </h3>
          </div>
          <img src={Stories} />
        </div>
      </Container>
    </Layout>
  );
};

export default SuccessPage;
