import React from 'react';

const Channel = () => {
  return (
    <div className="channel">
      <button type="button" className="btn up">+</button>
      <input type="text" className="txt" value="0" />
      <button type="button" className="btn down">-</button>
    </div>
  )
};

export default Channel;
