import React from 'react';
import Swatch from './Swatch';
import Form from './Form';

const Palette = () => {

  const swatches = [
    { red: 255, green: 0, blue: 0 },
    { red: 0, green: 255, blue: 0 },
    { red: 0, green: 0, blue: 255 },
  ];

  const swatchElements = swatches.map( (s, i) =>
    <Swatch key={i} {...s} />
  );

  return (
    <React.Fragment>
      <ul className="palette">
        { swatchElements }
      </ul>
      <Form />
    </React.Fragment>
  );
};

export default Palette;