import React from 'react';
import PropTypes from 'prop-types';
// Styles
import * as styles from 'styles/modules/ContouredSection.module.scss';

const ContouredSection = ({className, children, contourColor}) => {
  return (
    <section className={[styles.wrapper, className ? className : ''].join(' ')}>
      <svg
        className={[
          styles.waveySvg,
          contourColor ? styles[contourColor] : '',
        ].join(' ')}
        viewBox='0 0 2200 218'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M879.85 7.74C589-23.5 444.5 108.82 319.5 138.82 194.5 168.82 76 159.32 0 151V0h2200v151c-111.54 79.64-255.03 83.88-419.26 33.94-164.24-49.94-274.13-7.19-451.48-33.95C1151.91 124.24 1038 24.73 879.86 7.74Z'
          fill='#F5FFB6'
        />
      </svg>
      {children}
    </section>
  );
};

ContouredSection.defaultProps = {
  contourColor: 'peach',
};

ContouredSection.propTypes = {
  contourColor: PropTypes.oneOf(['reallyDark', 'peach']),
};

export default ContouredSection;
