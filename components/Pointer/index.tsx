'use client'

import React, {AnimationEvent, useEffect, useState} from 'react';
import '../../styles/Pointer.css';

type TPointerSize = 'tiny' | 'regular' | 'large';
type TDirectionMode = 'modeCL' | 'modeLC' | 'modeCR'| 'modeRC';

type TPointerProps = {
  onClick?: () => void
  paused: boolean,
  freezeAndCenter: boolean,
  color: string,
  size: TPointerSize,
  directionMode: TDirectionMode,
}

function Pointer({ color, directionMode, onClick}: TPointerProps) {
  const [mode, setMode] = useState<TDirectionMode>(directionMode);

  const pointerStyles = {
    animationName: mode,
    backgroundColor: color,
    animationDuration: '30s',
    animationIterationCount: 1,
    animationDelay: '5s'
  }
  // We need to set it everytime the props changes,
  // mode is just an element of the internal state
  useEffect(() => {
    setMode(directionMode);
  }, [directionMode]);

  function handleAnimationEnd(event: AnimationEvent<HTMLDivElement>): void {
    if (event.animationName === 'modeCL') {
      setMode('modeLC');
    } else if (event.animationName === 'modeLC') {
      setMode('modeCR');
    } else if (event.animationName === 'modeRC') {
      setMode('modeCL');
    } else if (event.animationName === 'modeCR') {
    setMode('modeRC');
  }
  }

  return <div
      className={"Pointer animatePointer"}
      style={pointerStyles}
      onAnimationEnd={handleAnimationEnd}
      onClick={onClick}
  />
}

export default Pointer;
export type {TDirectionMode}