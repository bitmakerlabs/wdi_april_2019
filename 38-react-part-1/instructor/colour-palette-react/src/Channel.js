import React from 'react';

const Channel = ({value}) => {

  console.log(`Channel: value: ${value}`);

  const updateValue = (newValue) => {
    console.log(`old value ${value}`)
    value = newValue;
    console.log(`value after ${value}`)
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
