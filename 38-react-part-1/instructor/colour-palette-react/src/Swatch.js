import React from 'react';
import Channel from './Channel';

const Swatch = () => {

  const style = {
    backgroundColor: `rgb(0, 0, 0)`
  }

  return (
    <li className="swatch" style={style}>
      <div>rgb(</div>
      <Channel />
      <Channel />
      <Channel />
      <div>);</div>
    </li>
  )
};

export default Swatch;