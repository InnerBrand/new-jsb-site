import React from 'react';

// Components
import Layout from 'components/Layout';
import Container from 'components/Container';

// Styles
import * as styles from 'styles/modules/pages/SuccessPage.module.scss';

const SuccessPage = () => {
  return (
    <Layout>
      <Container>
        <section className={styles.section}>
          <h1 className={styles.ready}>ready</h1>
          <p className={styles.adjective}>Adjective</p>
          <p className={styles.define}>
            1. Prepared mentally or physically for immediate action.
          </p>
        </section>
      </Container>
    </Layout>
  );
};

export default SuccessPage;
