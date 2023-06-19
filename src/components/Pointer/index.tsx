import React from 'react';
import './Pointer.css';

type PointerSize = 'tiny' | 'regular' | 'large';

type PointerProps = {
  paused:boolean,
  freezeAndCenter: boolean,
  color: string
}
function Pointer({paused,freezeAndCenter, color}: PointerProps) {
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
export {PointerSize}