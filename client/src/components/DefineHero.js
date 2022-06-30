import React from 'react';

import * as styles from 'styles/modules/DefineHero.module.scss';
import Container from 'components/Container';

const DefineHero = () => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.content}>
          <div className={styles.introText}>
            <h4>
              Success means finding the right job for the right candidate. The
              job that they're ready for with a company that's ready for them.
            </h4>
          </div>
          <h1 className={styles.ready}>ready</h1>
          <p className={styles.adjective}>Adjective</p>
          <p className={styles.define}>
            1. Prepared mentally or physically for immediate action.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default DefineHero;
