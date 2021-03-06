import React from 'react';

// Components
import Layout from 'components/Layout';
import Container from 'components/Container';

// Styles
import * as styles from 'styles/modules/pages/Terms.module.scss';

const PrivacyPage = () => {
  return (
    <>
      <Layout>
        <Container>
          <h2>Privacy Policy</h2>
          <h6 className={styles.text}>
            Your Privacy Is Protected At JSB Partners, LLC. We understand the
            importance of confidentiality in our business and assure all our
            clients, former clients, and visitors to this site that we have
            taken every available measure to safeguard the security of any
            non-public information we may have obtained about them. We do not
            disclose any private information about our clients, regardless of
            how collected, to third parties without their written permission
            except where required by law.
          </h6>
        </Container>
      </Layout>
    </>
  );
};

export default PrivacyPage;
