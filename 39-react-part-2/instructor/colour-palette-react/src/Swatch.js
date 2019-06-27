import React, { useState, useEffect } from 'react';
import Channel from './Channel';

const Swatch = ({red, green, blue, onRemove}) => {

  let [r, setR] = useState(red);  // ===> [orig_value_of_prop, function_to_change_the_prop]
  let [g, setG] = useState(green);
  let [b, setB] = useState(blue);

  const style = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`
  }

  useEffect( () => {
    setR(red);
    setG(green);
    setB(blue);
  }, [red, green, blue])

  return (
    <li className="swatch" style={style}>
      <div className ="swatch-controls">
        <div>rgb(</div>
        <Channel value={r} handleValueChange={setR} />
        <Channel value={g} handleValueChange={setG} />
        <Channel value={b} handleValueChange={setB} />
        <div>);</div>
      </div>

      <button className="swatch-cta" onClick={onRemove}>Remove</button>
    </li>
  )
};

export default Swatch;