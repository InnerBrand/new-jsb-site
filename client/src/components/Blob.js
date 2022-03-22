import React from 'react';
import PropTypes from 'prop-types';
// Styles
import * as styles from 'styles/modules/Blob.module.scss';

const Blob = ({className}) => {
  return (
    <svg
      viewBox='0 0 1832 1378'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`${styles.svg} ${className ? className : ''}`}>
      <path
        d='M1261.2 369.9c208.6 145.6 494.5 264 557 462.6 62.5 198.7-97.7 474.8-299.1 532.5-201.4 57.8-442.7-102.8-710.8-178.5-267-76-560.8-67-703.5-227.2-143.7-158.9-136.4-487.1 2.6-695C246.4 56.4 517.2-31 719.4 10.7c200.8 42 333.1 213.5 541.8 359.2Z'
        fill='#FFE7D5'
      />
    </svg>
  );
};

Blob.propTypes = {
  className: PropTypes.oneOf([PropTypes.string, PropTypes.object]),
};

export default Blob;
