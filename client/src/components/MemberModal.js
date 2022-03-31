import React from 'react';
import PropTypes from 'prop-types';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';
// Comopnents
import Container from './Container';
// Styles
import * as styles from 'styles/modules/MemberModal.module.scss';
// SVG
import BigX from 'assets/svg/big-x.inline.svg';

const MemberModal = ({data, isOpen, handler}) => {
  function handleClose() {
    handler.setMemberModalOpen(false);
  }

  const {name, title, email, phone, linkedin, heading, description} = data;

  return (
    isOpen && (
      <div className={styles.wrapper}>
        <div className={styles.overlay} />
        <div className={styles.content}>
          <div className={styles.circle}>
            <button className={styles.closeBtn} onClick={handleClose}>
              <BigX />
            </button>
          </div>
          <div className={styles.memberContent}>
            <Container></Container>
          </div>
        </div>
      </div>
    )
  );
};

MemberModal.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MemberModal;
