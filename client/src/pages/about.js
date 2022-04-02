import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
// Components
import BigTextPillsPlank from 'components/BigTextPillsPlank';
import Button, { ButtonGroup } from 'components/Button';
import CircleButton from 'components/CircleButton';
import CardSlider from 'components/CardSlider';
import Container from 'components/Container';
import ContouredSection from 'components/ContouredSection';
import Layout from 'components/Layout';
// Styles
import * as styles from 'styles/modules/pages/AboutPage.module.scss';

const AboutPage = ({ data }) => {
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
            A company founded by CPA's that now helps place them.
          </h3>
          <div className={styles.heroMeta}>
            <p>Founded 1998</p>
            <p>New York City, NY</p>
          </div>
        </section>
        <section className={styles.offsetText}>
          <h2 className={styles.offsetLeftHeading}>
            We deal directly with owners, CFOS, the decision-makers.
          </h2>
          <p className={styles.centerBlurb}>
            And we put ourselves in our client's shoes. Where would we want to
            work?
          </p>
        </section>
        <section className={styles.storyMission}>
          <div className={styles.block}>
            <div className={styles.titleCol}>
              <h6>Our Story</h6>
            </div>
            <div className={styles.bodyCol}>
              <p>
                With a passion for the hedge fund world, we started JSB Partners
                in 1994 to have a meaningful impact on our clients' lives. We
                intentionally work with many boutique firms because we get to
                deal directly with the decision-makers. We don't have patience
                for big, bureaucratic places where you’re just another number.
                We want you placed somewhere that can’t run without you. Where
                you make a difference.
              </p>
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.titleCol}>
              <h6>Our Mission</h6>
            </div>
            <div className={[styles.bodyCol, styles.fourGrid].join(' ')}>
              <p>To be at your side, always, as a trusted ally.</p>
              <p>To be an expert in the field.</p>
              <p>To make a meaningful impact on your life.</p>
              <p>To make sure we help firms grow with the best people.</p>
            </div>
          </div>
        </section>
      </Container>
      <CardSlider
        bigHeading='How we support you.'
        cardData={[
          'We can help you get jobs that no one else knows about.',
          'We stay in touch with you, keeping you up to date on industry trends.',
          'We’ll help you navigate complex compensation packages and employee agreements.',
          'We’ll help you understand the latest in compliance issues...',
          '...as well as the latest in operational requirements, tax & accounting, and investor relations strategies',
        ]}
        className={styles.firstCardSlider}
        eyebrow='When'
        headerHighlight='work'
        headerPre='Looking for'
      />
      <CardSlider
        cardData={[
          'We make sure you grow with only the best people.',
          'With 255 years of combined experience, we know your needs.',
          'Having placed over 1k CFOs, there’s no role too small or too large for us.',
        ]}
        className={styles.secondCardSlider}
        eyebrow='When'
        headerHighlight='talent'
        headerPre='Looking for'
      />
      <BigTextPillsPlank imageData={bigTextPillsImageData} />
      <Container className={styles.ctaBtnContainer}>
        <CircleButton
          className={styles.circleButton}
          ctaText='Meet the whole team'
        />
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
    heroFiles: allFile(filter: { name: { eq: "nyc-skyline" } }) {
      nodes {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    bigTextPillsFiles: allFile(
      filter: { name: { regex: "/(barry|joseph)/" } }
    ) {
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
