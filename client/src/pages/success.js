import React from 'react';

// Components
import Layout from 'components/Layout';
import Container from 'components/Container';
import ContouredSection from 'components/ContouredSection';
import Button, { ButtonGroup } from 'components/Button';

// Styles
import * as styles from 'styles/modules/pages/SuccessPage.module.scss';

const SuccessPage = () => {
  return (
    <Layout>
      <Container>
        <section className={styles.section}>
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
        </section>
        <div className={styles.stories}>
          <h1> Here's some of our wins</h1>
          <div className={styles.storyWrapper}>
            <h4 className={styles.storyBody}>
              JSB Partners was hired by a Las Vegas casino magnet to find a CFO
              for their Family Office. Within in 30 days of launching the search
              JSB identified the person who eventually was hired as their CFO.
              JSB negotiated the compensation package along with full
              re-location. We are pleased to state that our placement is still
              at the firm today ten years after our placement.
            </h4>
          </div>
          <div className={styles.storyWrapper}>
            <h4 className={styles.storyBody}>
              Blue Owl (formerly known as Owl Rock) was formed in 2018 when JSB
              was hired to conduct a COO search, effectively their first hire.
              Our placement was in charge of establishing a world class
              infrastructure, allowing them to go from an idea to 94B of AUM,
              and was instrumental in the firm listing on the NASDQ. We are
              pleased to state our COO placement is still at Blue Owl.
            </h4>
          </div>
          <div className={styles.storyWrapper}>
            <h4 className={styles.storyBody}>
              Appaloosa Management’s first CFO decided to retire, they turned to
              JSB to find their new CFO. Seemingly an easy assignment finding a
              CFO for arguably one of the best fund managers of all time. It
              proved to be a bit trickier assignment than one would expect based
              on their unique set of qualifications. No problem for JSB, we
              found their new CFO in short order and we are pleased to state our
              CFO placement is still here.
            </h4>
          </div>
          <div className={styles.storyWrapper}>
            <h4 className={styles.storyBody}>
              When New Mountain Capital was formed they turned to JSB Partners
              to find their first Controller. At that time New Mountain had 1
              private equity fund and today they manage in excess of 35B of
              capital across Private Equity, Real Estate and Credit. JSB’s
              placement is still is now the firms CFO. Today he serves as the
              Head of Firm Operations and Chief Financial Officer, and now
              partners with the Founder/CEO to oversee and manage the Firm.
            </h4>
          </div>
        </div>
        {/* <ContouredSection className={styles.bottomSection}>
          <div className={styles.content}>
            <h2 className={styles.question}>
              Ready to achieve success as a client?
            </h2>
            <p className={styles.cta}>
              Send us your resume and let’s get started
            </p>
            <ButtonGroup className={styles.btnGroup}>
              <Button to='/submit-resume'>Submit resume</Button>
              <Button uiType='secondary' href='tel:1234567890'>
                Call us
              </Button>
            </ButtonGroup>
          </div>
        </ContouredSection> */}
      </Container>
    </Layout>
  );
};

export default SuccessPage;
