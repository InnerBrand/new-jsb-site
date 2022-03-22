import React from 'react';
import {graphql} from 'gatsby';
import Block from '@sanity/block-content-to-react';

// Components
import Container from 'components/Container';
import Layout from 'components/Layout';
import HomepageHero from 'components/HomepageHero';
import Quote from 'components/Quote';

// Styles
import * as styles from 'styles/modules/pages/Home.module.scss';

const Home = ({data}) => {
  console.log(data);

  const {bioHeadline} = data.allSanityHomepage.nodes[0].homepageContent;

  return (
    <Layout>
      <HomepageHero />
      <h1 className={styles.heroBio}>{bioHeadline}</h1>
      {/* <Block blocks={subhead._rawData} /> */}
      <Quote />
    </Layout>
  );
};

export const query = graphql`
  {
    allSanityHomepage {
      nodes {
        homepageContent {
          bioHeadline
          heroHeadline
          featuredImage {
            asset {
              gatsbyImageData
            }
          }
          subhead {
            _rawData
          }
        }
      }
    }
  }
`;

export default Home;
