import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

// Components
import Container from './Container';
import CircleButton from './CircleButton';

// Styles
import * as styles from '../styles/modules/RolesGrid.module.scss';

function SingleRole({ role }) {
  const roleImg = getImage(role.image.asset.gatsbyImageData);

  return (
    <div className={styles.singleRole}>
      <GatsbyImage className={styles.roleImg} image={roleImg} />
      <div className={styles.singleOverlay}>
        <h4 className={styles.roleName}>{role.name}</h4>
      </div>
    </div>
  );
}

const RolesGrid = ({ roles }) => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.content}>
          <div className={styles.introText}>
            <p>A few roles we place</p>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.leftWrap}>
              {roles
                .filter((role, i) => {
                  console.log(i % 2);
                  return i % 2 === 0;
                })
                .map(role => (
                  <SingleRole
                    className={styles.role}
                    key={role.id}
                    role={role}
                  />
                ))}
            </div>
            <div className={styles.rightWrap}>
              {roles
                .filter((role, i) => {
                  console.log(i % 2);
                  return i % 2 !== 0;
                })
                .map(role => (
                  <SingleRole
                    className={styles.role}
                    key={role.id}
                    role={role}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className={styles.circleButton}>
          <CircleButton ctaText='See all roles we place' showArrow={false} />
        </div>
      </Container>
    </section>
  );
};

export default RolesGrid;
