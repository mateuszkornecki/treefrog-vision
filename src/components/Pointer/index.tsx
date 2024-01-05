'use client'

import React, {AnimationEvent, useCallback, useEffect, useState} from 'react';
import {TExerciseNumber} from "@/app/exercise/[slug]/page"
import getNextDirectionMode from "@/utils/getNextDirectionMode"
import useConfig from "@/hooks/useConfig"

type TPointerSize = 'tiny' | 'regular' | 'large'
type TDirectionMode = 'centerToLeft' | 'leftToCenter' | 'centerToRight'| 'rightToCenter'| 'leftToRight' | 'rightToLeft' | 'centerToTop' | 'topToCenter'
    | 'bottomToCenter' | 'centerToBottom'
type TSeconds = `${number}s`

type TPointerProps = {
  exercise: TExerciseNumber,
  iterationTime: TSeconds
  delay: TSeconds
  onClick?: () => void,
  paused?: boolean,
  color: string
}


function Pointer({ color, onClick, paused,iterationTime, delay, exercise}: TPointerProps) {
  const  {config} = useConfig()

  const [pointerSize,setPointerSize] = useState(config.pointerSize)

  const [directionMode, setDirectionMode ] = useState<TDirectionMode | null>(null)

 function setInitialDirectionMode():void {
   if(exercise === "O1" || exercise === "O2" || exercise === "O3") {
     setDirectionMode("centerToLeft")
   } else if(exercise === "O4") {
     setDirectionMode("centerToRight")
   } else if(exercise === "O5") {
     setDirectionMode("centerToTop")
   }
 }

  const handleNextDirectionMode = useCallback(setInitialDirectionMode, [exercise])

  useEffect(() => {
    handleNextDirectionMode()
  }, [exercise, handleNextDirectionMode])

    function handleAnimationEnd(event: AnimationEvent<HTMLDivElement>): void {
      switch (exercise) {
        case 'O1':
          setDirectionMode(getNextDirectionMode("O1", event.animationName))
          break;
        case 'O2':
          setDirectionMode(getNextDirectionMode("O2", event.animationName))
          break;
        case 'O3':
          setDirectionMode(getNextDirectionMode("O3", event.animationName))
         break;
     case 'O4':
       setDirectionMode(getNextDirectionMode("O4", event.animationName))
        break;
        case 'O5':
          setDirectionMode(getNextDirectionMode("O5", event.animationName))
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
      @keyframes centerToTop {
        from {
          top: calc(50% - (${pointerSize} / 2));
        }
        to {
          top: 0;
        }
      }
      @keyframes centerToBottom {
        from {
          bottom: calc(50% - (${pointerSize} / 2));
        }
        to {
          bottom: 0;
        }
      }    
      @keyframes bottomToCenter {
        from {
          bottom: 0;
        }
        to {
          bottom: calc(50% - (${pointerSize} / 2));
        }
      }
      @keyframes topToCenter {
        from {
          top: 0;
        }
        to {
          top: calc(50% - (${pointerSize} / 2));
        }
      }
      @keyframes rightToCenter {
        from {
          left: calc(100% - (${pointerSize}));
        }
        to {
          left: calc(50% - (${pointerSize} / 2));
        }
      }
      @keyframes leftToCenter {
        from {
          left: 0;
        }
        to {
          left: calc(50% - (${pointerSize} / 2));
        }
      }
      @keyframes centerToRight {
        from {
          left: calc(50% - (${pointerSize} / 2));
        }
        to {
          left:calc(100% - (${pointerSize}));
        }
      }
      @keyframes centerToLeft {
        from {
          left: calc(50% - (${pointerSize} / 2));
        }
        to {
          left: 0;
        }
      }
      @keyframes leftToRight {
        from {
          left: 0;
        }
        to {
          left: calc(100% - (${pointerSize}));
        }
      }
      @keyframes rightToLeft {
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

export default Pointer
export type {TDirectionMode, TSeconds}