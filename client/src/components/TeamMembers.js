import React, {useLayoutEffect, useRef, useState} from 'react';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
// Components
import Container from 'components/Container';
// Styles
import * as styles from 'styles/modules/TeamMembers.module.scss';
// SVG
import Arrow from 'assets/svg/fancy-arrow-right.inline.svg';

const TeamMembers = ({members}) => {
  gsap.registerPlugin(ScrollTrigger);
  const section = useRef(null);
  const sliderWrapper = useRef(null); // our 'pin-wrap'
  const slider = useRef(null); // our 'animation-wrap'

  useLayoutEffect(() => {
    console.log(section);
    console.log(sliderWrapper);
    console.log(slider);
    console.log('Running effect');
    const getToValue = () => -(slider.current.scrollWidth - window.innerWidth);
    console.log(getToValue());
    const scrollAnimation = gsap.fromTo(
      slider.current,
      {x: 0},
      {
        x: () => getToValue(),
        ease: 'none',
        scrollTrigger: {
          trigger: section.current,
          start: 'top top',
          end: () => '+=' + (slider.current.scrollWidth - window.innerWidth),
          pin: sliderWrapper.current,
          invalidateOnRefresh: true,
          scrub: true,
          // markers: true,
        },
      }
    );

    return () => {
      console.log('cleanup');
      scrollAnimation.kill();
    };
  }, []);

  return (
    <section className={styles.wrapper} ref={section}>
      {/* <Container> */}
      <div className={styles.sliderWrapper} ref={sliderWrapper}>
        <div className={styles.slider} ref={slider}>
          <h6 className={styles.verticalText}>Team Members</h6>
          <div className={styles.members}>
            {members.map(member => {
              const memberImg = getImage(member.image.asset.gatsbyImageData);
              return (
                <button key={member.id} className={styles.singleMember}>
                  <GatsbyImage
                    alt=''
                    className={styles.memberImage}
                    image={memberImg}
                  />
                  <h4 className={styles.memberName}>{member.name}</h4>
                  <div className={styles.readCta}>
                    <span>Read</span>
                    <Arrow />
                  </div>
                </button>
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
