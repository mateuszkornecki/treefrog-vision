import React, {AnimationEvent, useEffect, useState} from 'react';
import './Pointer.css';

type TPointerSize = 'tiny' | 'regular' | 'large';
type TDirection = 'both' | 'left' | 'right';
type TDirectionMode = 'modeLeft' | 'modeLeftReturn' | 'modeRight' | 'modeRightReturn' | 'modeBoth';
type TAnimationIterationCount = 'infinite' | 1;
type TAnimationDuration = '30s' | '5s' | '2s'

type TPointerProps = {
  paused: boolean,
  freezeAndCenter: boolean,
  color: string,
  size: TPointerSize,
  directionMode: TDirectionMode,
}

function Pointer({paused, freezeAndCenter, color, size, directionMode}: TPointerProps) {
  const [animationDuration, setAnimationDuration] = React.useState<TAnimationDuration>('30s');
  const [mode, setMode] = useState<TDirectionMode>(directionMode);
  const [animationIterationCount, setAnimationIterationCount] = React.useState<TAnimationIterationCount>('infinite');

  const pointerStyles = {
    animationName: mode,
    animationPlayState: paused ? "paused" : "running",
    backgroundColor: color,
    animationDuration: animationDuration,
    animationIterationCount: animationIterationCount,
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
    // we need to set it when for example 'modeBoth' button is clicked
    if (mode === 'modeBoth') {
      setAnimationIterationCount('infinite');
    } else {
      setAnimationIterationCount(1)
    }
  }, [mode])

  // We need to set it everytime the props changes,
  // mode is just an element of the internal state
  useEffect(() => {
    setMode(directionMode);
  }, [directionMode]);

  function handleAnimationEnd(event: AnimationEvent<HTMLDivElement>): void {
    // inis setfinite should be used only when modeBoth is set!
    // setAnimationIterationCount(1);

    if (event.animationName === 'modeLeft') {
      setMode('modeLeftReturn');
      setAnimationDuration('2s');
    } else if (event.animationName === 'modeRight') {
      setMode('modeRightReturn');
      setAnimationDuration('2s');
    } else if (event.animationName === 'modeLeftReturn') {
      setMode('modeLeft');
      setAnimationDuration('30s');
    } else if (event.animationName === 'modeRightReturn') {
      setMode('modeRight');
      setAnimationDuration('30s');
    }
  }

  useEffect(() => {
    if (mode !== 'modeBoth') {
      setAnimationIterationCount(1);
    } else {
      setAnimationIterationCount('infinite');
    }
  }, [mode]);

  useEffect(() => {
    changePointerSize(size);
  }, [size]);
  return <div
      className={`Pointer ${freezeAndCenter ? "" : "animatePointer"}`}
      style={pointerStyles}
      onAnimationEnd={handleAnimationEnd}
  />
}

export default Pointer;
export {TPointerSize, TDirectionMode}