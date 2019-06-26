import React from 'react';

const Channel = ({value}) => {

  console.log(`Channel: value: ${value}`);

  const handleUp = () => {
    console.log('+1');
  };

  const handleDown = () => {
    console.log('+1');
  };

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className="channel">
      <button type="button" className="btn up" onClick={ handleUp } >+</button>
      <input type="text" className="txt" value={value} onChange={ handleChange } />
      <button type="button" className="btn down" onClick={ handleDown } >-</button>
    </div>
  )
};

export default Channel;
