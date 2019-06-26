import React from 'react';

const Channel = ({value}) => {
  return (
    <div className="channel">
      <button type="button" className="btn up">+</button>
      <input type="text" className="txt" value={value} />
      <button type="button" className="btn down">-</button>
    </div>
  )
};

export default Channel;
