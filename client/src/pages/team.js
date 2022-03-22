import React from 'react';
import {graphql} from 'gatsby';
// Components
import Blob from 'components/Blob';
import Layout from 'components/Layout';
import Quote from 'components/Quote';
import TeamMembers from 'components/TeamMembers';
// Styles
import * as styles from 'styles/modules/pages/Team.module.scss';

const TeamPage = ({data}) => {
  const headline = data.allSanityTeamPage.nodes[0].heroHeadline;
  const members = data.allSanityTeamPage.nodes[0].teamMembers;
  console.log(members);
  return (
    <>
      <Layout>
        <h1 className={styles.heroHeadline}>{headline}</h1>
        <TeamMembers members={members} />
        <Quote />
      </Layout>
    </>
  );
};

export const query = graphql`
  query MyQuery {
    allSanityTeamPage {
      nodes {
        teamMembers {
          name
          id
          image {
            asset {
              gatsbyImageData
            }
          }
        }
        heroHeadline
      }
    }
  }
`;

export default TeamPage;
