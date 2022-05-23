import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

// Components
import Container from 'components/Container';

// Styles
import * as styles from 'styles/modules/BigClaim.module.scss';

const BigClaim = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityHomepage {
        nodes {
          bigClaim {
            subText
            bigText
            image {
              asset {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `);

  const { image, subText, bigText } = data.allSanityHomepage.nodes[0].bigClaim;
  const claimImg = getImage(image.asset);

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.imgWrapper}>
          <GatsbyImage className={styles.claimImg} image={claimImg} />
        </div>
        <div className={styles.claimText}>
          <div className={styles.subText}>
            <p>{subText}</p>
          </div>
          <div className={styles.bigText}>
            <h1>{bigText}</h1>
            <h6 className={styles.lowerText}>
              With a track record of uniquely matching clients with candidates,
              we find the next opportunities across accounting, operations, tax,
              valuations, compliance and investor relations professionals at all
              levels
            </h6>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BigClaim;
