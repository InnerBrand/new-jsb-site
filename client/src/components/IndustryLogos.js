import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

// Styles
import * as styles from 'styles/modules/IndustryLogos.module.scss';
import Container from './Container';

function SingleLogo({ imgData }) {
  const logoImg = getImage(imgData.asset);
  console.log(imgData);
  return (
    <div className={styles.singleLogo}>
      <GatsbyImage image={logoImg} />
    </div>
  );
}

const IndustryLogos = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityHomepage {
        nodes {
          industryLogos {
            centerText
            logos {
              asset {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `);

  const { logos, centerText } = data.allSanityHomepage.nodes[0].industryLogos;

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          {logos.map(logo => {
            return <SingleLogo key={logo.id} imgData={logo} />;
          })}
        </div>
        <h1 className={styles.text}>{centerText}</h1>
      </Container>
    </section>
  );
};

export default IndustryLogos;
