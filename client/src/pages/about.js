import React from 'react';
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
import { SEO } from '../components/Seo';

// Styles
import * as styles from 'styles/modules/pages/AboutPage.module.scss';

const AboutPage = ({ data }) => {
  const heroImgData = data.heroFiles.nodes[0].childImageSharp;
  const heroImg = getImage(heroImgData);

  const bigTextPillsImageData = data.bigTextPillsFiles.nodes;

  return (
    <Layout header theme='dark'>
      <Container>
        <section className={styles.hero}>
          {/* <h1 className={`jumbo ${styles.heroHeading}`}>Who we are</h1> */}
          <GatsbyImage
            className={styles.heroImg}
            image={heroImg}
            alt='NYC Skyline'
          />
          <h3 className={styles.heroSubhead}>
            We are executive search experts with deep-rooted relationships in
            the financial community.
          </h3>
          <div className={styles.heroMeta}>
            <p>Founded 1998</p>
            <p>New York, New York</p>
          </div>
        </section>
        <section className={styles.offsetText}>
          <div className={styles.dashedBorder}>
            <h2 className={styles.offsetLeftHeading}>
              We deal directly with Partners, CFO's, COO's, and Decision-Makers.
            </h2>
            <p className={styles.centerBlurb}>
              Recognized throughout the industry for our unique ability to
              effectively match clients and candidates.
            </p>
          </div>
        </section>
        <section className={styles.storyMission}>
          <div className={styles.dashedBorder}>
            <div className={styles.block}>
              <div className={styles.titleCol}>
                <h6>Our Story</h6>
              </div>
              <div className={styles.bodyCol}>
                <p>
                  Starting out in the financial industry, we continue to
                  cultivate deep relationships with people and firms in this
                  micro been a leader in executive search for Alternative Asset
                  Management and Family Office since 1998. Recognized for our
                  ability to help talent find the jobs they are truly ready for,
                  while supporting companies to find their next great employee.
                  We place accounting, operations, tax, valuations, compliance
                  and investor relations professionals at all levels. Our
                  clients are both large companies and boutiques, where we deal
                  with the decision makers. We appreciate the importance of the
                  person beyond the resume, as do our clients. As a result, we
                  often fill the jobs no one else knows about.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.dashedBorder}>
            <div className={styles.block}>
              <div className={styles.titleCol}>
                <h6>Our Mission</h6>
              </div>
              <div className={[styles.bodyCol, styles.fourGrid].join(' ')}>
                <p>
                  To be a trusted ally, at your side throughout the journey.
                </p>
                <p>
                  To always be an expert in the field and on the pulse of the
                  financial community.
                </p>
                <p>To make sure firms grow with the best people.</p>
                <p>To find the right Next for you.</p>
              </div>
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
          'We help find your next greatest career opportunity.',
        ]}
        className={styles.firstCardSlider}
        eyebrow='When'
        headerHighlight='work'
        headerPre='Looking for'
      />
      <CardSlider
        cardData={[
          'We make sure you grow with only the best people.',
          'With 278 years of combined experience, we know your needs.',
          'Having placed over 1k CFOs our experience is second to none.',
        ]}
        className={styles.secondCardSlider}
        eyebrow='When'
        headerHighlight='talent'
        headerPre='Looking for'
      />
      <BigTextPillsPlank imageData={bigTextPillsImageData} />
      <Container className={styles.ctaBtnContainer}>
        <CircleButton ctaText='Meet the whole team' to='/team' />
      </Container>
      <ContouredSection
        className={styles.bottomSection}
        contourColor='reallyDark'
      >
        <Container>
          <div className={styles.content}>
            <h2>Are you ready for your next job?</h2>
            <p>Let's find your next</p>
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
export const Head = () => <SEO title='About - JSB Partners' />;
