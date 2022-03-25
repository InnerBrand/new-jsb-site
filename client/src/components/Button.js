import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby';
// Styles
import * as styles from 'styles/modules/Button.module.scss';

const Button = props => {
  const {
    autoFocus,
    children,
    className,
    href,
    loading,
    onClick,
    onFocus,
    onBlur,
    size,
    state,
    target,
    title,
    to,
    type,
    uiType,
  } = props;

  const btnRef = useRef(null);

  useEffect(() => {
    if (!!autoFocus) {
      btnRef.current.focus();
    }
  }, [autoFocus]);

  const classes = [
    styles.button,
    uiType ? styles[uiType] : '',
    size === 'small' || size === 'large' ? styles[size] : '',
    loading ? styles.loading : '',
    className ? className : '',
  ].join(' ');

  if (!!to && !href) {
    return (
      <Link
        to={to}
        className={classes}
        state={state}
        title={title}
        ref={btnRef}>
        {loading && <span className={styles.loadingSpinner} />}
        <div className={styles.content}>{children}</div>
      </Link>
    );
  }

  if (!!href && !to) {
    return (
      <a
        className={classes}
        href={href}
        title={title}
        target={target}
        onClick={onClick}
        ref={btnRef}
        rel='noreferrer'>
        {loading && <span className={styles.loadingSpinner} />}
        <div className={styles.content}>{children}</div>
      </a>
    );
  }

  return (
    <button
      className={classes}
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      disabled={loading}
      ref={btnRef}
      type={type}>
      {loading && <span className={styles.loadingSpinner} />}
      <div className={styles.content}>{children}</div>
    </button>
  );
};

Button.defaultProps = {
  autoFocus: false,
};

Button.propTypes = {
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'large']),
  state: PropTypes.object,
  target: PropTypes.oneOf(['_blank']),
  title: PropTypes.string,
  to: PropTypes.string,
  uiType: PropTypes.oneOf(['black', 'secondary', 'underline']),
};

export const ButtonGroup = props => {
  return (
    <div
      className={
        props.className
          ? `${styles.buttonGroup} ${props.className}`
          : styles.buttonGroup
      }>
      {props.children}
    </div>
  );
};

export default Button;
