import React, { useState } from 'react';

export default function Aboutus() {
  const [Beta, afterbeta] = useState({
    color: 'white',
    backgroundColor: 'black'
  });

  let handle = () => {
    if (Beta.color === 'white') {
      afterbeta({
        color: 'black',
        backgroundColor: 'white'
      });
    } else {
      afterbeta({
        color: 'white',
        backgroundColor: 'black'
      });
    }
  };

  return (
    <>
      <div style={Beta} className='container'>
        <h1>hello bhai log</h1>
        <div className="btn-primary btn" onClick={handle}>change mode</div>
      </div>
    </>
  );
}
