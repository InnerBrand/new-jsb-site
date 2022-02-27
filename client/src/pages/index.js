import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Block from '@sanity/block-content-to-react';

// Components
import Layout from '../components/Layout';
import Container from '../components/Container';
import HomepageHero from '../components/HomepageHero';
import Quote from '../components/Quote';

// Styles
import * as styles from '../styles/modules/pages/Home.module.scss';

const Home = ({ data }) => {
  console.log(data);

  const { featuredImage, bioHeadline, heroHeadline, subhead } =
    data.allSanityHomepage.nodes[0].homepageContent;
  const featImg = getImage(featuredImage.asset.gatsbyImageData);

  return (
    <Container>
      <Layout>
        <HomepageHero />
        <h1 className={styles.heroBio}>{bioHeadline}</h1>
        {/* <Block blocks={subhead._rawData} /> */}
        <Quote />
      </Layout>
    </Container>
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
