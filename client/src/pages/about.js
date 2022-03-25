import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';
// Components
import BigTextPillsPlank from 'components/BigTextPillsPlank';
import Button, {ButtonGroup} from 'components/Button';
import CircleButton from 'components/CircleButton';
import CardSlider from 'components/CardSlider';
import Container from 'components/Container';
import ContouredSection from 'components/ContouredSection';
import Layout from 'components/Layout';
// Styles
import * as styles from 'styles/modules/pages/AboutPage.module.scss';

const AboutPage = ({data}) => {
  const heroImgData = data.heroFiles.nodes[0].childImageSharp;
  const heroImg = getImage(heroImgData);

  const bigTextPillsImageData = data.bigTextPillsFiles.nodes;

  console.log(heroImg);
  return (
    <Layout header theme='dark'>
      <Container>
        <section className={styles.hero}>
          <h1 className={`jumbo ${styles.heroHeading}`}>Who we are.</h1>
          <GatsbyImage
            className={styles.heroImg}
            image={heroImg}
            alt='NYC Skyline'
          />
          <h3 className={styles.heroSubhead}>
            We want to be a part of our customers' career from beginning to end.
            We don't want to just place people and move on.
          </h3>
          <div className={styles.heroMeta}>
            <p>Founded 1998</p>
            <p>New York City, NY</p>
          </div>
        </section>
        <section className={styles.offsetText}>
          <h2 className={styles.offsetLeftHeading}>
            Navigating the job market isn't easy, especially at the executive
            level.
          </h2>
          <p className={styles.centerBlurb}>
            Which is where or story begins—at helping you navigate an infinitely
            complex and constantly changing job market.
          </p>
        </section>
        <section className={styles.storyMission}>
          <div className={styles.block}>
            <div className={styles.titleCol}>
              <h6>Our Story</h6>
            </div>
            <div className={styles.bodyCol}>
              <p>
                It all started in 1998 when Joseph S. Barr and Barry Taitz sat
                down at their kitchen table etc blabla. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.titleCol}>
              <h6>Our Mission</h6>
            </div>
            <div className={[styles.bodyCol, styles.fourGrid].join(' ')}>
              <p>To be at your side from day 1 to day 1095.</p>
              <p>
                To keep you up to date with the latest changes in the market.
              </p>
              <p>To have the best industry experts as your ally.</p>
              <p>Some other super interesting thing.</p>
            </div>
          </div>
        </section>
      </Container>
      <CardSlider
        bigHeading='How we support you.'
        cardData={[
          'Our experts can help you navigate Employment agreements.',
          'We will keep you up to date on the latest compliance issues.',
          'Our strategists will help you to develop investor relations strategies.',
        ]}
        className={styles.firstCardSlider}
        eyebrow='When'
        headerHighlight='work'
        headerPre='Looking for'
      />
      <CardSlider
        cardData={[
          'We sure you are able to fill C-Level and executives positions in less than 3 weeks.',
          'We make sure all of our talent is up to date on the latest Tax & accounting mandates.',
          'Our strategists will help you to develop investor relations strategies.',
        ]}
        eyebrow='When'
        headerHighlight='talent'
        headerPre='Looking for'
      />
      <BigTextPillsPlank imageData={bigTextPillsImageData} />
      <Container className={styles.ctaBtnContainer}>
        <CircleButton ctaText='Meet the whole team' />
      </Container>
      <ContouredSection
        className={styles.bottomSection}
        contourColor='reallyDark'>
        <Container>
          <div className={styles.content}>
            <h2>Are you ready for your next job?</h2>
            <p>Send us your resume and let's get started, together.</p>
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
    heroFiles: allFile(filter: {name: {eq: "nyc-skyline"}}) {
      nodes {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    bigTextPillsFiles: allFile(filter: {name: {regex: "/(barry|joseph)/"}}) {
      nodes {
        id
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`;

AboutPage.propTypes = {};

export default AboutPage;
