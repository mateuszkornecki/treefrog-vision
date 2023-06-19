import React from 'react';
import './Pointer.css';

type PointerSize = 'tiny' | 'regular' | 'large';

type PointerProps = {
  paused: boolean,
  freezeAndCenter: boolean,
  color: string,
  size: PointerSize,
}

function Pointer({paused, freezeAndCenter, color, size}: PointerProps) {
  const pointerStyles = {
    animationPlayState: paused ? "paused" : "running",
    backgroundColor: color,
  }

  function changePointerSize(newSize: PointerSize): void {
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
export {PointerSize}