import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// Components
import Quote from '../components/Quote';

// Styles
import * as styles from '../styles/modules/pages/Team.module.scss';
import Layout from '../components/Layout';
import Blob from '../components/Blob';

const TeamPage = ({ data }) => {
  const headline = data.allSanityTeamPage.nodes[0].heroHeadline;
  return (
    <>
      <Layout>
        <h1 className={styles.heroHeadline}>{headline}</h1>
        <Quote />
      </Layout>
    </>
  );
};

export const query = graphql`
  query MyQuery {
    allSanityTeamPage {
      nodes {
        heroHeadline
      }
    }
  }
`;

export default TeamPage;
