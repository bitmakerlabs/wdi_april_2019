import React, { useRef } from 'react';

const Form = ({onSubmit}) => {

  const rRef = useRef();
  const gRef = useRef();
  const bRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const s = {
      red:   Number(rRef.current.value),
      green: Number(gRef.current.value),
      blue:  Number(bRef.current.value)
    };

    onSubmit(s);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input ref={rRef} type="number" />
      <input ref={gRef} type="number" />
      <input ref={bRef} type="number" />
      <button>Add Colour!</button>
    </form>
  );
};

export default Form;
