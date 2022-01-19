import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
// SVG
import { RiErrorWarningFill } from 'react-icons/ri';
// Styles
import * as styles from '../styles/modules/Input.module.scss';

const Input = ({
  raised,
  className,
  disabled,
  errors,
  onFocus,
  onBlur,
  id,
  type,
  name,
  placeholder,
  register,
  stacked,
  validation,
  wrapperClass,
}) => {
  const error = errors[name];

  const wrapperClasses = `${styles.wrapper} 
     ${stacked ? styles.stacked : ''} 
     ${wrapperClass ? wrapperClass : ''}`;

  const inputClasses = `${styles.input} 
    ${raised ? styles.raised : ''} 
    ${className ? className : ''}`;

  useEffect(() => {
    ReactTooltip.rebuild();
  }, [error]);

  return (
    <>
      <ReactTooltip className='custom-tooltip' place='left' effect='solid' />
      <div className={wrapperClasses}>
        {error && (
          <RiErrorWarningFill
            className={styles.errorIndicator}
            data-tip={error.message}
          />
        )}
        <input
          className={inputClasses}
          id={id || name}
          {...register(name, {
            ...validation,
          })}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </div>
    </>
  );
};

Input.defaultProps = {
  type: 'text',
};

Input.propTypes = {
  caption: PropTypes.string,
  className: PropTypes.any,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  stacked: PropTypes.bool,
  raised: PropTypes.bool,
  required: PropTypes.bool,
};

export default Input;
