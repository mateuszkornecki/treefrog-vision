'use client'

import React, {AnimationEvent, useCallback, useContext, useEffect, useState} from 'react';
import {useSearchParams} from "next/navigation";
import settingContext from "@/context/ConfigsContext";
import {TExerciseNumber} from "@/app/exercise/[slug]/page";

type TPointerSize = 'tiny' | 'regular' | 'large';
type TDirectionMode = 'centerToLeft' | 'leftToCenter' | 'centerToRight'| 'rightToCenter'| 'leftToRight' | 'rightToLeft' | 'centerToTop' | 'topToCenter'
    | 'bottomToCenter' | 'centerToBottom';
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
     setDirectionMode("centerToLeft");
   } else if(exercise === "O4") {
     setDirectionMode("centerToRight");
   } else if(exercise === "O5") {
     setDirectionMode("centerToTop");
   }
 }

  const handleNextDirectionMode = useCallback(setNextDirectionMode, []);

  useEffect(() => {
    handleNextDirectionMode();
  }, [exercise]);

  function handleAnimationEnd(event: AnimationEvent<HTMLDivElement>): void {
    function exerciseO1(): void {
      if (event.animationName === 'centerToLeft') {
        setDirectionMode('leftToCenter');
      } else if (event.animationName === 'leftToCenter') {
        setDirectionMode('centerToRight');
      } else if (event.animationName === 'rightToCenter') {
        setDirectionMode('centerToLeft');
      } else if (event.animationName === 'centerToRight') {
        setDirectionMode('rightToCenter');
      } else {
        // The default animation mode.
        setDirectionMode('centerToLeft')
      }
    }

    function exerciseO2(): void {
      if (event.animationName === 'centerToLeft') {
        setDirectionMode('leftToRight');
      } else if (event.animationName === 'leftToRight') {
        setDirectionMode('rightToLeft');
      } else if (event.animationName === 'rightToLeft') {
        setDirectionMode('leftToRight')
      }
    }

      function exerciseO3(): void {
        if (event.animationName === 'centerToLeft') {
          setDirectionMode('leftToCenter');
        } else if (event.animationName === 'leftToCenter') {
          setDirectionMode('centerToLeft');
        }
      }

      function exerciseO4(): void {
      if (event.animationName === 'centerToRight') {
        setDirectionMode('rightToCenter');
      } else if (event.animationName === 'rightToCenter') {
        setDirectionMode('centerToRight')
      }
    }

    function exerciseO5(): void {
      if (event.animationName === "centerToTop") {
        setDirectionMode("topToCenter");
      } else if (event.animationName === "topToCenter") {
        setDirectionMode("centerToBottom");
      } else if (event.animationName === "centerToBottom") {
        setDirectionMode("bottomToCenter");
      } else if (event.animationName === "bottomToCenter") {
        setDirectionMode("centerToTop");
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
          top: 0
        }
        to {
          top: calc(50% - (${pointerSize} / 2));;
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
          left: 0
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
          left: calc(100% - (${pointerSize}))
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

export default Pointer;
export type {TDirectionMode}