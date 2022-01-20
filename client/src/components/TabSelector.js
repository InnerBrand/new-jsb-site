import React, { useRef, useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
// Styles
import * as styles from '../styles/modules/TabSelector.module.scss';

const TabSelector = ({ data, name, register, onChange }) => {
  const [checkedTab, setCheckedTab] = useState(() => {
    let id;
    let index;
    data.forEach((item, i) => {
      if (item.defaultChecked) {
        id = item.id;
        index = i;
      }
    });

    return {
      id,
      index,
    };
  });

  function handleChange(e) {
    setCheckedTab({
      id: e.target.id,
      index: parseInt(e.target.dataset.index),
    });
    onChange && onChange(e.target.id);
  }

  return (
    <div
      className={`${styles.wrapper} ${
        data.length === 3 ? styles.threeOptions : ''
      }`}>
      {data.map((input, i) => {
        return (
          <label
            className={`${styles.tab} ${
              checkedTab.id === input.id ? styles.checked : ''
            }`}>
            {input.label}
            <input
              style={{ width: 0, height: 0, position: 'absolute' }}
              type='radio'
              id={input.id}
              name={name}
              value={input.value}
              defaultChecked={!!input.defaultChecked}
              checked={checkedTab.id === input.id}
              data-index={i}
              {...register(name)}
              onChange={handleChange}
            />
          </label>
        );
      })}
      <div
        className={styles.selectTab}
        style={{
          width: `calc(${(1 / data.length) * 100}% - ${4 / data.length}px)`,
          transform: `translateX(${checkedTab.index * 100}%)`,
        }}
      />
    </div>
  );
};

TabSelector.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      defaultChecked: PropTypes.bool,
    }).isRequired
  ),
};

export default TabSelector;
