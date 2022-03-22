import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';
// Components
import Container from 'components/Container';
import Layout from 'components/Layout';
// Styles
import * as styles from 'styles/modules/pages/AboutPage.module.scss';

const AboutPage = ({data}) => {
  const heroImgData = data.allFile.nodes[0].childImageSharp;
  const heroImg = getImage(heroImgData);

  console.log(heroImg);
  return (
    <Layout header theme='dark'>
      <Container>
        <section className={styles.hero}>
          <h1 className={`jumbo ${styles.heroHeading}`}>Who We Are</h1>
          <GatsbyImage
            className={styles.heroImg}
            image={heroImg}
            alt='NYC Skyline'
          />
          <h3 className={styles.heroSubhead}>
            We want to be a part of our customers’ career from beginning to end.
            We don’t want to just place people and move on.
          </h3>
          <div className={styles.heroMeta}>
            <p>Founded 1998</p>
            <p>New York City, NY</p>
          </div>
        </section>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  {
    allFile(filter: {name: {eq: "nyc-skyline"}}) {
      nodes {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`;

AboutPage.propTypes = {};

export default AboutPage;
