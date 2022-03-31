import React from 'react';
import PropTypes from 'prop-types';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';
import Block from '@sanity/block-content-to-react';
import {AnimatePresence, motion} from 'framer-motion';
// Comopnents
// Styles
import * as styles from 'styles/modules/MemberModal.module.scss';
// SVG
import BigX from 'assets/svg/big-x.inline.svg';
import {RiLinkedinBoxFill} from 'react-icons/ri';
import {HiOutlineMail} from 'react-icons/hi';

const MemberModal = ({data, isOpen, handler}) => {
  function handleClose() {
    handler.setMemberModalOpen(false);
  }

  const {
    biography,
    email,
    id,
    image,
    jobTitle,
    linkedInLink,
    name,
    phoneNumber,
    title,
  } = data;

  console.log(data);

  const img = getImage(image?.asset);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className={styles.wrapper}>
          <>
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{ease: [0.3, 0, 0, 1], duration: 0.5}}
              className={styles.overlay}
            />
            <motion.div
              initial={{
                y: '100%',
              }}
              animate={{y: 0}}
              exit={{y: '100%'}}
              transition={{ease: [0.3, 0, 0, 1], duration: 0.5}}
              className={styles.content}>
              <div className={styles.circle}>
                <button onClick={handleClose}>
                  <BigX />
                </button>
              </div>
              <div className={styles.memberContent}>
                <div className={styles.inner}>
                  <div className={styles.memberDetails}>
                    <GatsbyImage
                      className={styles.image}
                      image={img}
                      alt={`Photo of ${name}`}
                    />
                    <h2 className={styles.name}>{name}</h2>
                    <Block
                      blocks={title._rawData}
                      className={styles.title}
                      renderContainerOnSingleChild
                    />
                    <div className={styles.contactInfo}>
                      {email && (
                        <a
                          href={`mailto:${email}`}
                          target='_blank'
                          rel='noreferrer'
                          title={`Send ${name} an email`}>
                          {email}
                        </a>
                      )}
                      {phoneNumber && (
                        <a
                          href={`tel:${phoneNumber}`}
                          title={`Give ${name} a call`}>
                          {phoneNumber}
                        </a>
                      )}
                    </div>
                    <div className={styles.socials}>
                      {email && (
                        <a
                          href={`mailto:${email}`}
                          target='_blank'
                          rel='noreferrer'
                          title={`Send ${name} an email`}>
                          <HiOutlineMail />
                        </a>
                      )}
                      {linkedInLink && (
                        <a
                          href={linkedInLink}
                          target='_blank'
                          rel='noreferrer'
                          title={`Send ${name} an email`}>
                          <RiLinkedinBoxFill />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className={styles.memberStory}>
                    {jobTitle && (
                      <h1 className={styles.jobTitle}>{jobTitle}</h1>
                    )}
                    {biography && (
                      <Block
                        blocks={biography._rawData}
                        className={styles.biography}
                        renderContainerOnSingleChild
                      />
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        </div>
      )}
    </AnimatePresence>
  );
};

MemberModal.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MemberModal;
