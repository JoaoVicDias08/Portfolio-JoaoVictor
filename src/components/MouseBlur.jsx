import { useEffect, useState } from 'react';
import '../styles/MouseBlur.css';

export default function MouseBlur( {position} ) {
    
  return (
    <div
      className="blur-circle"
      style={{
        left: position.x,
        top: position.y,
      }}
    />
  );
}
