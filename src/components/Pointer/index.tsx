import React from 'react';
import './Pointer.css';
function Pointer({paused,freezeAndCenter, color}) {
  const pointerStyles = {
    animationPlayState: paused ? "paused" : "running",
    backgroundColor: color,
  }
  return <div
      className={`Pointer ${freezeAndCenter ? "":"animatePointer"}`}
  style={pointerStyles}
  />
}

export default Pointer;