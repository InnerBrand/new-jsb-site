import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';
// Components
import CircleButton from 'components/CircleButton';
import Container from 'components/Container';
// Styles
import * as styles from 'styles/modules/HomepageHero.module.scss';

const HomepageHero = () => {
  const data = useStaticQuery(graphql`
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
  `);

  const {featuredImage, bioHeadline, heroHeadline, subhead} =
    data.allSanityHomepage.nodes[0].homepageContent;
  const featImg = getImage(featuredImage.asset.gatsbyImageData);

  return (
    <section className={styles.wrapper}>
      <Container>
        <div className={styles.homeHeroContent}>
          <h1 className={styles.heroHeadline}>{heroHeadline}</h1>

          <GatsbyImage className={styles.heroImg} image={featImg} />

          <p className={styles.heroSubtext}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed m dolor
            sit.
          </p>
          <div className={styles.heroBtn}>
            <CircleButton ctaText='Contact Us' showArrow={false} />
          </div>
        </div>
        <h1 className={styles.heroBio}>{bioHeadline}</h1>
      </Container>
    </section>
  );
};

export default HomepageHero;
