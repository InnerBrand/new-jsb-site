import React from 'react';
import { graphql } from 'gatsby';

// Components
import Layout from 'components/Layout';
import HomepageHero from 'components/HomepageHero';
import Quote from 'components/Quote';
import RolesGrid from 'components/RolesGrid';
import BigClaim from 'components/BigClaim';

// Styles
import * as styles from 'styles/modules/pages/Home.module.scss';

const Home = ({ data }) => {
  console.log(data);

  const roles = data.allSanityHomepage.nodes[0].rolesPlaced;

  return (
    <Layout>
      <HomepageHero />
      <RolesGrid roles={roles} />
      <BigClaim />
      <Quote />
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
