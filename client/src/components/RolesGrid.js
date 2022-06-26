import React from 'react';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';

// Components
import Container from './Container';
import CircleButton from './CircleButton';

// Styles
import * as styles from '../styles/modules/RolesGrid.module.scss';

function SingleRole({role}) {
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

const RolesGrid = ({roles}) => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.content}>
          <h4 className={styles.introText}>
            Everyone has a next. An exciting new challenge or a change in
            work-life balance. Whatever you're ready for, wherever you are in
            your career, we can help you find that next opportunity
          </h4>
          <div className={styles.imgGridWrapper}>
            <div className={styles.imgGridColumn}>
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
            <div className={[styles.imgGridColumn, styles.right].join(' ')}>
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
          <CircleButton
            ctaText='See all roles we place'
            showArrow={false}
            to='/services'
          />
        </div>
      </Container>
    </section>
  );
};

export default RolesGrid;
