import React, {useEffect, useRef, useState} from 'react';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';

// Components
import Container from 'components/Container';

// Styles
import * as styles from 'styles/modules/TeamMembers.module.scss';

const TeamMembers = ({members}) => {
  const controllerRef = useRef(null);
  const sliderRef = useRef(null);

  console.log(controllerRef, sliderRef);

  useEffect(() => {
    const observer = new IntersectionObserver(handleInView, {
      root: document,
      rootMargin: '-50% 0px 0px 0px',
      threshold: 0,
    });

    observer.observe(controllerRef.current);
  }, [controllerRef.current]);

  function handleInView(entries, observer) {
    entries.forEach(entry => {
      console.log(entry);
    });
  }

  return (
    <section className={styles.wrapper}>
      <div
        style={{
          width: 100,
          background: 'yellow',
          height: 1,
          position: 'absolute',
          top: '50%',
          left: 0,
        }}
        ref={controllerRef}
      />
      {/* <Container> */}
      <div className={styles.sliderWrapper}>
        <div className={styles.slider} ref={sliderRef}>
          <h6 className={styles.verticalText}>Team Members</h6>
          <div className={styles.members}>
            {members.map(member => {
              const memberImg = getImage(member.image.asset.gatsbyImageData);
              return (
                <div key={member.id} className={styles.singleMember}>
                  <GatsbyImage
                    className={styles.memberImage}
                    image={memberImg}
                  />
                  <h4 className={styles.memberName}>{member.name}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* </Container> */}
    </section>
  );
};

export default TeamMembers;
