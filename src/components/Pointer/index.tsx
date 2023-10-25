'use client'

import React, {AnimationEvent, useContext, useEffect, useState} from 'react';
import {useSearchParams} from "next/navigation";
import settingContext from "@/context/ConfigsContext";
import {TExerciseNumber} from "@/app/exercise/[slug]/page";

type TPointerSize = 'tiny' | 'regular' | 'large';
type TDirectionMode = 'modeCL' | 'modeLC' | 'modeCR'| 'modeRC'| 'modeLR' | 'modeRL' | 'modeCT' | 'modeTC'
    | 'modeBC' | 'modeCB';
type TPointerProps = {
  exercise: string,
  onClick?: () => void,
  paused?: boolean,
  color: string
}

function Pointer({ color, onClick, paused, exercise}: TPointerProps) {
  const  setting = useContext(settingContext);
  const [pointerSize,setPointerSize] = useState(setting.pointerSize);
const searchParams = useSearchParams();
  const iterationTime = searchParams.get("iterationTime") || setting.iterationTime;
  const delay = searchParams.get("delay") || setting.delay;

  const [directionMode, setDirectionMode ] = useState<TDirectionMode | null>(null);

 function setNextDirectionMode():void {
   if(exercise === "O1" || exercise === "O2" || exercise === "O3") {
     setDirectionMode("modeCL");
   } else if(exercise === "O4") {
     setDirectionMode("modeCR");
   } else if(exercise === "O5") {
     setDirectionMode("modeCT");
   }
 }
  useEffect(() => {
    setNextDirectionMode();
  }, [exercise]);

  function handleAnimationEnd(event: AnimationEvent<HTMLDivElement>): void {
    function exerciseO1(): void {
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

    function exerciseO2(): void {
      if (event.animationName === 'modeCL') {
        setDirectionMode('modeLR');
      } else if (event.animationName === 'modeLR') {
        setDirectionMode('modeRL');
      } else if (event.animationName === 'modeRL') {
        setDirectionMode('modeLR')
      }
    }

      function exerciseO3(): void {
        if (event.animationName === 'modeCL') {
          setDirectionMode('modeLC');
        } else if (event.animationName === 'modeLC') {
          setDirectionMode('modeCL');
        }
      }

      function exerciseO4(): void {
      if (event.animationName === 'modeCR') {
        setDirectionMode('modeRC');
      } else if (event.animationName === 'modeRC') {
        setDirectionMode('modeCR')
      }
    }

    function exerciseO5(): void {
      if (event.animationName === "modeCT") {
        setDirectionMode("modeTC");
      } else if (event.animationName === "modeTC") {
        setDirectionMode("modeCB");
      } else if (event.animationName === "modeCB") {
        setDirectionMode("modeBC");
      } else if (event.animationName === "modeBC") {
        setDirectionMode("modeCT");
      }
    }

      switch (exercise) {
        case 'O1':
          exerciseO1();
          break;
        case 'O2':
          exerciseO2();
          break;
        case 'O3':
          exerciseO3();
         break;
     case 'O4':
        exerciseO4();
        break;
        case 'O5':
          exerciseO5();
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
        transition: background-color 5s ease;
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
      @keyframes modeCT {
        from {
          top: calc(50% - (${pointerSize} / 2));
        }
        to {
          top: 0;
        }
      }
      @keyframes modeCB {
        from {
          bottom: calc(50% - (${pointerSize} / 2));
        }
        to {
          bottom: 0;
        }
      }    
      @keyframes modeBC {
        from {
          bottom: 0;
        }
        to {
          bottom: calc(50% - (${pointerSize} / 2));
        }
      }
      @keyframes modeTC {
        from {
          top: 0
        }
        to {
          top: calc(50% - (${pointerSize} / 2));;
        }
      }
      }
      @keyframes modeTC {
        from {
          bottom: 0
        }
        to {
          bottom: calc(50% - (${pointerSize} / 2));;
        }
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