import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
// SVG
import {ExclamationCircleIcon} from '@heroicons/react/solid';
// Styles
import * as styles from 'styles/modules/Input.module.scss';

const Input = ({
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
  validation,
  wrapperClass,
}) => {
  const error = errors[name];

  const wrapperClasses = `${styles.wrapper} 
     ${wrapperClass ? wrapperClass : ''}`;

  const inputClasses = `${styles.input} 
    ${className ? className : ''} ${error ? styles.error : ''}`;

  useEffect(() => {
    ReactTooltip.rebuild();
  }, [error]);

  return (
    <>
      <ReactTooltip className='custom-tooltip' place='left' effect='solid' />
      <div className={wrapperClasses}>
        {error && (
          <ExclamationCircleIcon
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
          disabled={disabled}
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <label className={styles.label} for={id}>
          {placeholder}
        </label>
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
  required: PropTypes.bool,
};

export default Input;
