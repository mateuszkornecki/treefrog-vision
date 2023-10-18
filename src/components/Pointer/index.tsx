'use client'

import React, {AnimationEvent, useContext, useEffect, useState} from 'react';
import {useSearchParams} from "next/navigation";
import settingContext from "@/context/ConfigsContext";

type TPointerSize = 'tiny' | 'regular' | 'large';
type TDirectionMode = 'modeCL' | 'modeLC' | 'modeCR'| 'modeRC'| 'modeLR' | 'modeRL';


type TPointerProps = {
  onClick?: () => void
  paused?: boolean,
  color: string
}

function Pointer({ color, onClick, paused}: TPointerProps) {
  const  setting = useContext(settingContext);
  const [pointerSize,setPointerSize] = useState(setting.pointerSize);
const searchParams = useSearchParams();
  const iterationTime = searchParams.get("iterationTime") || setting.iterationTime;
  const exerciseNumber = searchParams.get("exercise");
  const delay = searchParams.get("delay") || setting.delay;

  const [directionMode, setDirectionMode ] = useState<TDirectionMode | null>(null);

  useEffect(() => {

    if(exerciseNumber === "O1" || exerciseNumber === "O2" || exerciseNumber === "O3") {
      setDirectionMode("modeCL");
    }
  }, [exerciseNumber]);

  function handleAnimationEnd(event: AnimationEvent<HTMLDivElement>): void {
    function exercise1(): void {
      if (event.animationName === 'modeCL') {
        setDirectionMode('modeLC');
      } else if (event.animationName === 'modeLC') {
        setDirectionMode('modeCR');
      } else if (event.animationName === 'modeRC') {
        setDirectionMode('modeCL');
      } else if (event.animationName === 'modeCR') {
        setDirectionMode('modeRC');
      } else {
        // The default animation mode.
        setDirectionMode('modeCL')
      }
    }

    function exercise2(): void {
      if (event.animationName === 'modeCL') {
        setDirectionMode('modeLR');
      } else if (event.animationName === 'modeLR') {
        setDirectionMode('modeRL');
      } else if (event.animationName === 'modeRL') {
        setDirectionMode('modeLR')
      }
    }

      function exercise3(): void {
        if (event.animationName === 'modeCL') {
          setDirectionMode('modeLC');
        } else if (event.animationName === 'modeLC') {
          setDirectionMode('modeCL');
        }
      }

      switch (exerciseNumber) {
        case 'O1':
          exercise1();
          break;
        case 'O2':
          exercise2();
          break;
        case 'O3':
          exercise3();
          break;
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
        animation-name: ${directionMode};
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
      @keyframes modeLR {
        from {
          left: 0;
        }
        to {
          left: calc(100% - (${pointerSize}))
        }
      }
      @keyframes modeRL {
        from {
          left: calc(100% - (${pointerSize}));
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