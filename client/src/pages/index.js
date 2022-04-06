import React from 'react';
import { graphql } from 'gatsby';

// Components
import Layout from 'components/Layout';
import HomepageHero from 'components/HomepageHero';
import Quote from 'components/Quote';
import RolesGrid from 'components/RolesGrid';
import BigClaim from 'components/BigClaim';
import IndustryLogos from 'components/IndustryLogos';
import ContouredSection from 'components/ContouredSection';

// Styles
import * as styles from 'styles/modules/pages/Home.module.scss';

import figLogos from 'assets/images/fig-logos.png';
import CircleButton from 'components/CircleButton';
import madeOf from 'assets/images/made-of.png';

const Home = ({ data }) => {
  console.log(data);

  const roles = data.allSanityHomepage.nodes[0].rolesPlaced;

  return (
    <Layout>
      <HomepageHero />
      <RolesGrid roles={roles} />
      <BigClaim />
      {/* <div className={styles.figLogos}>
        <img src={figLogos} />
      </div> */}
      <IndustryLogos />
      <Quote />
      <div className={styles.circleButton}>
        <CircleButton ctaText='Read more stories' />
      </div>
      <div className={styles.madeOf}>
        <img src={madeOf} />
      </div>
      <ContouredSection />
    </Layout>
  );
};

export const query = graphql`
  {
    allSanityHomepage {
      nodes {
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
