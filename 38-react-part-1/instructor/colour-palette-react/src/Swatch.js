import React from 'react';
import Channel from './Channel';

const Swatch = ({red, green, blue}) => {

  const style = {
    backgroundColor: `rgb(${red}, ${green}, ${blue})`
  }

  return (
    <li className="swatch" style={style}>
      <div>rgb(</div>
      <Channel value={red} />
      <Channel value={green} />
      <Channel value={blue} />
      <div>);</div>
    </li>
  )
};

export default Swatch;