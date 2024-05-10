import React from 'react';

const Filter = ({ onChange, options }) => {
  return (
    <select onChange={onChange}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};

export default Filter;
