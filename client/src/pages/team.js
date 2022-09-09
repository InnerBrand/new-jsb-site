import React from 'react';
import { graphql } from 'gatsby';
// Components
import Container from 'components/Container';
import FactsPlank from 'components/FactsPlank';
import Layout from 'components/Layout';
import LadyQuote from 'components/LadyQuote';
import Space from 'components/Space';
import TeamMembers from 'components/TeamMembers';
import ContouredSection from 'components/ContouredSection';
import Button, { ButtonGroup } from 'components/Button';
import { SEO } from '../components/Seo';

// Styles
import * as styles from 'styles/modules/pages/Team.module.scss';

const TeamPage = ({ data }) => {
  const {
    heroHeadline,
    teamMembers,
    foundingMembers,
    factsEyebrow,
    factsHeadline,
    facts,
  } = data.allSanityTeamPage.nodes[0];

  console.log(data.allSanityTeamPage.nodes[0]);
  return (
    <>
      <Layout>
        <Container>
          <h1 className={styles.heroHeadline}>{heroHeadline}</h1>
          <Space unit={8} />
        </Container>
        <TeamMembers members={foundingMembers} title='Founding Members' />
        <TeamMembers members={teamMembers} title='Team Members' />
        <FactsPlank
          eyebrow={factsEyebrow}
          headline={factsHeadline}
          facts={facts}
        />
        <LadyQuote className={styles.ladyQuote} />
        <ContouredSection className={styles.bottomSection}>
          <Container>
            <div className={styles.content}>
              <h2 className={styles.question}>Want to work at JSB?</h2>
              <p className={styles.cta}>We're hiring.</p>
              <ButtonGroup className={styles.btnGroup}>
                <Button to='/submit-resume' className={styles.submitBtn}>
                  Submit resume
                </Button>
              </ButtonGroup>
            </div>
          </Container>
        </ContouredSection>
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
        factsEyebrow
        factsHeadline
        facts {
          prefix
          highlight
          suffix
          _key
        }
      }
    }
  }
`;

export default TeamPage;

export const Head = () => <SEO title='Meet your Expert - JSB Partners' />;
