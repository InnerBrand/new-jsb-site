import React from 'react';
import {graphql} from 'gatsby';

// Components
import Layout from 'components/Layout';
import HomepageHero from 'components/HomepageHero';
import BigQuote from 'components/BigQuote';
import RolesGrid from 'components/RolesGrid';
import BigClaim from 'components/BigClaim';
import IndustryLogos from 'components/IndustryLogos';
import ContouredSection from 'components/ContouredSection';
import Button, {ButtonGroup} from 'components/Button';
import Container from 'components/Container';

// Styles
import * as styles from 'styles/modules/pages/Home.module.scss';

import figLogos from 'assets/images/fig-logos.png';
import CircleButton from 'components/CircleButton';
import madeOf from 'assets/images/made-of.png';

const Home = ({data}) => {
  console.log(data);

  const {bioHeadline} = data.allSanityHomepage.nodes[0].homepageContent;
  const roles = data.allSanityHomepage.nodes[0].rolesPlaced;

  return (
    <Layout>
      <HomepageHero />
      <h1 className={styles.heroBio}>{bioHeadline}</h1>
      <RolesGrid roles={roles} />
      <BigClaim />
      <IndustryLogos />
      <BigQuote className={styles.homeQuote} />
      {/* <div className={styles.circleButton}>
        <CircleButton ctaText='Read more stories' />
      </div> */}
      <div className={styles.madeOf}>
        <img src={madeOf} />
      </div>
      <div className={styles.circleButton}>
        <CircleButton ctaText='Meet our experts' to='/team' />
      </div>
      <ContouredSection className={styles.bottomSection}>
        <Container>
          <div className={styles.content}>
            <h2 className={styles.question}>
              Are you ready for your next job?
            </h2>
            <p className={styles.cta}>
              Send us your resume and let's get started, together.
            </p>
            <ButtonGroup className={styles.btnGroup}>
              <Button to='/submit-resume'>Submit resume</Button>
              <Button uiType='secondary' href='tel:1234567890'>
                Call us
              </Button>
            </ButtonGroup>
          </div>
        </Container>
      </ContouredSection>
    </Layout>
  );
};

export const query = graphql`
  {
    allSanityHomepage {
      nodes {
        homepageContent {
          bioHeadline
        }
        rolesPlaced {
          name
          image {
            asset {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;

export default Home;
