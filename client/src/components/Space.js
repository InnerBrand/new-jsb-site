import React from 'react';
import PropTypes from 'prop-types';

const Space = ({unit}) => {
  const spacingUnit = 4;
  return <div style={{height: `${unit * spacingUnit}px`}} />;
};

Space.propTypes = {
  unit: PropTypes.oneOf([
    0.5, 1, 2, 3, 4, 5, 6, 8, 12, 16, 18, 24, 30, 40, 60, 80,
  ]).isRequired,
};

export default Space;
