import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import'./Type.css';

const Type = () => {
  const [text] = useTypewriter({
    words: ['MERN STACK DEVELOPER', 'PROBLEM SOLVER'],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <h2 className="typing-effect" style={{ margin: 0 }}>
      <span className="typed-text">{text}</span>
      <Cursor cursorStyle="|" />
    </h2>
  );
};

export default Type;
