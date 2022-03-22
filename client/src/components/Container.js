import React from 'react';
// Styles
import * as styles from 'styles/modules/Container.module.scss';

const Container = ({children, className}) => {
  return (
    <div className={`${styles.container} ${className ? className : ''}`}>
      {children}
    </div>
  );
};

export default Container;
