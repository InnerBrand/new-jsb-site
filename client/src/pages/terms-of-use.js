import React from 'react';

// Components
import Layout from 'components/Layout';
import Container from 'components/Container';

// Styles
import * as styles from 'styles/modules/pages/Terms.module.scss';

const TermsPage = () => {
  return (
    <>
      <Layout>
        <Container>
          <h2>Terms Of Use</h2>
          <h6 className={styles.text}>
            Please read these Terms and Conditions (“Terms”, “Terms and
            Conditions”) carefully before using the www.jsbpartners.com website
            (the “Service”) operated by JSB Partners (“us”, “we”, or “our”).
            Your access to and use of the Service is conditioned on your
            acceptance of and compliance with these Terms. These Terms apply to
            all visitors, users and others who access or use the Service. By
            accessing or using the Service you agree to be bound by these Terms.
            If you disagree with any part of the terms then you may not access
            the Service. Links to Other Web Sites Our Service may contain links
            to third-party web sites or services that are not owned or
            controlled by JSB Partners. JSB Partners has no control over, and
            assumes no responsibility for, the content, privacy policies, or
            practices of any third party web sites or services. You further
            acknowledge and agree that JSB Partners shall not be responsible or
            liable, directly or indirectly, for any damage or loss caused or
            alleged to be caused by or in connection with use of or reliance on
            any such content, goods or services available on or through any such
            web sites or services. We strongly advise you to read the terms and
            conditions and privacy policies of any third-party web sites or
            services that you visit. Governing Law These Terms shall be governed
            and construed in accordance with the laws of New York, United
            States, without regard to its conflict of law provisions. Our
            failure to enforce any right or provision of these Terms will not be
            considered a waiver of those rights. If any provision of these Terms
            is held to be invalid or unenforceable by a court, the remaining
            provisions of these Terms will remain in effect. These Terms
            constitute the entire agreement between us regarding our Service,
            and supersede and replace any prior agreements we might have between
            us regarding the Service. Changes We reserve the right, at our sole
            discretion, to modify or replace these Terms at any time. If a
            revision is material we will try to provide at least 30 days notice
            prior to any new terms taking effect. What constitutes a material
            change will be determined at our sole discretion. By continuing to
            access or use our Service after those revisions become effective,
            you agree to be bound by the revised terms. If you do not agree to
            the new terms, please stop using the Service. Contact Us If you have
            any questions about these Terms, please contact us.
          </h6>
        </Container>
      </Layout>
    </>
  );
};

export default TermsPage;
