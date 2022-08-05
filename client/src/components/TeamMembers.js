import React, { useLayoutEffect, useRef, useState } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// Components
import MemberModal from 'components/MemberModal';
// Styles
import * as styles from 'styles/modules/TeamMembers.module.scss';
// SVG
import Arrow from 'assets/svg/fancy-arrow-right.inline.svg';

const TeamMembers = ({ members, title }) => {
  const [activeMember, setActiveMember] = useState({});
  const [memberModalOpen, setMemberModalOpen] = useState(false);
  console.log(members.length);

  if (members.length > 2) {
    gsap.registerPlugin(ScrollTrigger);
  }
  const section = useRef(null);
  const sliderWrapper = useRef(null); // our 'pin-wrap'
  const slider = useRef(null); // our 'animation-wrap'

  useLayoutEffect(() => {
    if (members.length > 2) {
      const getToValue = () =>
        -(slider.current.scrollWidth - window.innerWidth);
      const scrollAnimation = gsap.fromTo(
        slider.current,
        { x: 0 },
        {
          x: () => getToValue(),
          ease: 'none',
          scrollTrigger: {
            trigger: section.current,
            start: 'top top',
            end: () => '+=' + (slider.current.scrollWidth - window.innerWidth),
            pin: sliderWrapper.current,
            // anticipatePin: 0.5,
            invalidateOnRefresh: true,
            scrub: true,
            // markers: true,
          },
        }
      );
      return () => scrollAnimation.kill();
    }
  }, []);

  return (
    <section
      className={[
        styles.wrapper,
        members.length < 3 ? styles.noSlider : '',
      ].join(' ')}
      ref={section}
    >
      {/* <Container> */}
      <div className={styles.sliderWrapper} ref={sliderWrapper}>
        <div className={styles.slider} ref={slider}>
          {title && <h6 className={styles.verticalText}>{title}</h6>}
          <div className={styles.members}>
            {members.map(member => {
              const memberImg = getImage(member.image.asset.gatsbyImageData);
              return (
                <button
                  key={member.id}
                  className={styles.singleMember}
                  onClick={() => {
                    setMemberModalOpen(true);
                    setActiveMember(member);
                  }}
                >
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
      <MemberModal
        data={activeMember}
        isOpen={memberModalOpen}
        handler={{ setMemberModalOpen }}
      />
      {/* </Container> */}
    </section>
  );
};

export default TeamMembers;
