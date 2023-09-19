'use client'

import React, {AnimationEvent, useEffect, useState} from 'react';
import {useSearchParams} from "next/navigation";
import useTheme from "@/hooks/useTheme";

type TPointerSize = 'tiny' | 'regular' | 'large';
type TDirectionMode = 'modeCL' | 'modeLC' | 'modeCR'| 'modeRC';


type TPointerProps = {
  onClick?: () => void
  paused?: boolean,
  color: string,
  directionMode: TDirectionMode,
}

function Pointer({ color, directionMode, onClick, paused}: TPointerProps) {
  const [stateDirectionMode, setStateDirectionMode ] = useState<TDirectionMode>(directionMode);
  const [pointerSize,setPointerSize] = useState('175px');
  const {theme} = useTheme();
const searchParams = useSearchParams();
  const iterationTime = searchParams.get("iterationTime") || theme.iterationTime;
  const delay = searchParams.get("delay") || theme.delay;

  // We need to set it everytime the props changes,
  // mode is just an element of the internal state
  useEffect(() => {
    setStateDirectionMode(directionMode);
  }, [directionMode]);

  function handleAnimationEnd(event: AnimationEvent<HTMLDivElement>): void {
    if (event.animationName === 'modeCL') {
      setStateDirectionMode('modeLC');
    } else if (event.animationName === 'modeLC') {
      setStateDirectionMode('modeCR');
    } else if (event.animationName === 'modeRC') {
      setStateDirectionMode('modeCL');
    } else if (event.animationName === 'modeCR') {
      setStateDirectionMode('modeRC');
    }
  }



  return <>
  <div
      className={"Pointer"}
      onAnimationEnd={handleAnimationEnd}
      onClick={onClick}
  />
    <style jsx>{`
      .Pointer {
        position: absolute;
        height: ${pointerSize};
        width: ${pointerSize};
        border-radius: 50%;
        transition: background ${delay} ease;
        animation-duration: ${iterationTime};
        -moz-animation-iteration-count: 1;
        animation-delay: ${delay};
        background-color: ${color};
        animation-name: ${stateDirectionMode};
        animation-fill-mode: both;
        animation-timing-function: ease-in-out;
        animation-direction: alternate;
        animation-play-state: ${paused ? 'paused' : 'running'};
      }
      .Pointer:hover{
        cursor: pointer;
      }
      @keyframes modeRC {
        from {
          left:calc(100% - (${pointerSize}));
        }
        to {
          left: calc(50% - (${pointerSize} / 2));
        }
      }
      @keyframes modeLC {
        from {
          left: 0
        }
        to {
          left: calc(50% - (${pointerSize} / 2));
        }
      }
      @keyframes modeCR {
        from {
          left: calc(50% - (${pointerSize} / 2));
        }
        to {
          left:calc(100% - (${pointerSize}));
        }
      }
      @keyframes modeCL {
        from {
          left: calc(50% - (${pointerSize} / 2));
        }
        to {
          left: 0;
        }
      }
      
    `}</style>
  </>
}

export default Pointer;
export type {TDirectionMode}