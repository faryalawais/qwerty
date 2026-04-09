import React from 'react';

const ErrorDisplay = ({ messages }) => {
  return (
    <div className='error'>
      {messages.split('\n').map((msg, index) => (
        <p key={index}>{msg}</p>
      ))}
    </div>
  );
};

export default ErrorDisplay;