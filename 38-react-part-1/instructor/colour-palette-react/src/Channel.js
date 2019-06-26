import React from 'react';

const Channel = ({value}) => {

  console.log(`Channel: value: ${value}`);

  const updateValue = (newValue) => {
    console.log(`updating with ${newValue}`)
  };

  return (
    <div className="channel">
      <button type="button" className="btn up" onClick={ () => updateValue(1) } >+</button>
      <input type="text" className="txt" value={value} onChange={ ({target}) => updateValue(target.value) } />
      <button type="button" className="btn down" onClick={ () => updateValue(-1) } >-</button>
    </div>
  )
};

export default Channel;
