import React from 'react';

const Channel = ({value, handleValueChange}) => {

  const updateValue = (v) => {
    if (Number.isInteger(parseInt(v)) && v >= 0 && v <= 255)
      handleValueChange(v);
  };

  return (
    <div className="channel">
      <button type="button" className="btn up" onClick={ () => updateValue(value + 1) } >+</button>
      <input type="text" className="txt" value={value} onChange={ ({target}) => updateValue(target.value) } />
      <button type="button" className="btn down" onClick={ () => updateValue(value -1 ) } >-</button>
    </div>
  )
};

export default Channel;
