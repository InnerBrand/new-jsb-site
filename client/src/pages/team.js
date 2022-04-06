import React from 'react';
import { graphql } from 'gatsby';
// Components
import Blob from 'components/Blob';
import Container from 'components/Container';
import Layout from 'components/Layout';
import Quote from 'components/Quote';
import TeamMembers from 'components/TeamMembers';
import FoundingMembers from 'components/FoundingMembers';

// Styles
import * as styles from 'styles/modules/pages/Team.module.scss';

import FactsPic from 'assets/images/facts .png';
import tMemb from 'assets/images/t-memb.png';
import fMemb from 'assets/images/f-memb.png';
import Space from 'components/Space';

const TeamPage = ({ data }) => {
  const headline = data.allSanityTeamPage.nodes[0].heroHeadline;
  const members = data.allSanityTeamPage.nodes[0].teamMembers;
  const founders = data.allSanityTeamPage.nodes[0].foundingMembers;
  console.log(members);
  return (
    <>
      <Layout>
        <Container>
          <h1 className={styles.heroHeadline}>{headline}</h1>
          <Space unit={10} />
        </Container>
        <TeamMembers members={members} />
        <div className={styles.facts}>
          <img src={FactsPic} />
        </div>
        <Quote />
        <FoundingMembers founders={founders} />
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
          title {
            _rawData
          }
          email
          phoneNumber
          linkedInLink
          jobTitle
          biography {
            _rawData
          }
        }
        foundingMembers {
          name
          id
          image {
            asset {
              gatsbyImageData
            }
          }
          title {
            _rawData
          }
          email
          phoneNumber
          linkedInLink
          jobTitle
          biography {
            _rawData
          }
        }
        heroHeadline
      }
    }
  }
`;

export default TeamPage;
