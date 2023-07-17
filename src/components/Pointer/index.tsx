import React, {useEffect} from 'react';
import './Pointer.css';

type TPointerSize = 'tiny' | 'regular' | 'large';
type TDirection = 'both' | 'left' | 'right';

type PTPointerProps = {
  paused: boolean,
  freezeAndCenter: boolean,
  color: string,
  size: TPointerSize,
  direction: TDirection,
}

function Pointer({paused, freezeAndCenter, color, size, direction}: PTPointerProps) {
  const pointerStyles = {
    animationName: direction,
    animationPlayState: paused ? "paused" : "running",
    backgroundColor: color,
  }

  function changePointerSize(newSize: TPointerSize): void {
    if (newSize === 'tiny') {
      document.documentElement.style.setProperty('--pointer-size', `75px`);
    } else if (newSize === 'large') {
      document.documentElement.style.setProperty('--pointer-size', `300px`);
    } else {
      document.documentElement.style.setProperty('--pointer-size', `175px`);
    }
  }

  useEffect(() => {
    changePointerSize(size);
  }, [size]);
  return <div
      className={`Pointer ${freezeAndCenter ? "" : "animatePointer"}`} style={pointerStyles}
  />
}

export default Pointer;
export {TPointerSize, TDirection}