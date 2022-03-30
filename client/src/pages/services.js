import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

// Components
import Layout from 'components/Layout';
import Container from 'components/Container';
import CardSlider from 'components/CardSlider';

// Styles
import * as styles from 'styles/modules/pages/ServicesPage.module.scss';
import ContouredSection from 'components/ContouredSection';
import CircleButton from 'components/CircleButton';

const ServicesPage = ({ data }) => {
  const heroImgData = data.heroFiles.nodes[0].childImageSharp;
  const heroImg = getImage(heroImgData);
  return (
    <Layout header theme='dark'>
      <Container>
        <section className={styles.hero}>
          <h1 className={`jumbo ${styles.heroHeading}`}>Our Services</h1>
          <GatsbyImage
            className={styles.heroImg}
            image={heroImg}
            alt='NYC Skyline'
          />
          <h3 className={styles.heroSubhead}>
            We want to be a part of our customers' career from beginning to end.
            We don't want to just place people and move on.
          </h3>
        </section>
        <div className={styles.bigText}>
          <h1>We're here to help.</h1>
        </div>
      </Container>
      <CardSlider
        cardData={[
          'Accounting',
          'Operations',
          'Tax',
          'Valuations',
          'Compliance',
          'Investor Relations',
        ]}
        className={styles.firstCardSlider}
        eyebrow='With'
        headerHighlight='searches'
        headerPre='Executive'
      />
      <CardSlider
        cardData={[
          'Accounting Support',
          'Bookkeeping',
          'Accounts Payable',
          'Payroll',
          'Administrative Support',
          'Office Manager',
          'Exec/Admin Assistant',
          'Personal Assistant',
          'Estate Manager',
          'Facilities',
        ]}
        eyebrow='With'
        headerHighlight='temporary staffing'
        headerPre='Administrative and'
      />
      <CardSlider
        cardData={[
          'Hedge Funds',
          'Private Equity Funds',
          'Private Credit Funds',
          'Family Offices',
        ]}
        eyebrow='With'
        headerHighlight='management'
        headerPre='Alternative asset'
      />
      <ContouredSection
        className={styles.bottomSection}
        contourColor='reallyDark'>
        <Container>
          <div className={styles.content}>
            <h2>Ready to get started?</h2>
            <CircleButton ctaText='Contact Us' />
          </div>
        </Container>
      </ContouredSection>
    </Layout>
  );
};

export const query = graphql`
  {
    heroFiles: allFile(filter: { name: { eq: "services-hero" } }) {
      nodes {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`;
export default ServicesPage;
