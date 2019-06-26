import React from 'react';

const Greeting = ({firstName, lastName}) => {
  return <h2 className="greetings">Hello {firstName} {lastName}!</h2>
};

export default Greeting;
