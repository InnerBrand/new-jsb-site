import React from 'react';

// Components
import Layout from 'components/Layout';
import Container from 'components/Container';

// Styles
import * as styles from 'styles/modules/pages/Terms.module.scss';

const DisclaimerPage = () => {
  return (
    <>
      <Layout>
        <Container>
          <h2>Disclaimer</h2>
          <div className={styles.text}>
            <p>
              Use of the website in the domain JSBpartners.com&nbsp;is governed
              by the following terms, conditions, and disclaimers (“Terms”).
              &nbsp;Users of this site agree to abide by these Terms. The site
              is solely owned by JSB Partners, LLC&nbsp;and is provided as a
              public service to our present and future clients. JSB Partners,
              LLC reserves the right to change or discontinue any feature of
              this site at any time.
            </p>
            <br />
            <p>
              The site may include facts, views, opinions, or procedures of
              individuals or organizations not affiliated with JSB Partners,
              LLC.&nbsp; JSB Partners, LLC does not endorse, guarantee, or
              warrant the accuracy, completeness, or timeliness of these facts,
              views, opinions, or procedures. JSB Partners, LLC specifically
              disclaims any and all liability for any claims or damages that may
              result from facts, views, opinions, or procedures of individuals
              or organizations not affiliated with JSB Partners, LLC appearing
              on this &nbsp;site. The site may contain links to other Internet
              sites maintained by third parties which JSB Partners, LLC believes
              may be of interest or use to our clients or other users of this
              site but for which JSB Partners, LLC has no responsibility. JSB
              Partners, LLC makes no effort to independently verify information
              on Internet sites outside of the JSBpartners.com
              or&nbsp;JSBpartners.com domains, nor does it attempt to exert
              editorial control over such information&nbsp;JSB Partners, LLC
              makes no representations or warranty of any kind as to the
              accuracy or any other aspect of the information contained on such
              Internet sites. JSB Partners, LLC specifically disclaims any and
              all liability for any claims or damages that may result from
              information on Internet sites outside of the JSB Partners, LLC
              related&nbsp;domains.
            </p>
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default DisclaimerPage;
