import React, { useRef } from 'react';

const Form = () => {

  const rRef = useRef();
  const gRef = useRef();
  const bRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(
        rRef.current.value, 
        gRef.current.value, 
        bRef.current.value
    );
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