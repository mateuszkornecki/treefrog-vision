import React, {ReactElement, useState} from "react"
import './styles/style.css'

function PointerDirection(): ReactElement {

    type TDirection = "right" | "left" | "top" | "bottom" | "center"
    const [firstDirection, setFirstDirection] = useState<TDirection>()
    const [secondDirection, setSecondDirection] = useState<TDirection>()

    function handlePointerClick(direction: TDirection) {
        const hasSelectedDirections = firstDirection && secondDirection

        if (hasSelectedDirections) {
            return
        } else {
            if(!firstDirection) {
                setFirstDirection(direction)
            } else if(!secondDirection) {
                setSecondDirection(direction)
            }
        }
           }

           function getPointerClassName(direction: string): string  {
               if(direction === firstDirection || direction ===secondDirection) {
                   return "pointerDirection__pointer pointerDirection__pointer--green"
               } else {
                   return "pointerDirection__pointer pointerDirection__pointer--black"
               }
           }


    return (
        <>
            <div className="pointerDirection__container">
                <div className="pointerDirection__top">
                    <div
                        className={getPointerClassName("top")}
                        onClick={()=> handlePointerClick("top")}
                    />
                </div>
                <div className="pointerDirection__topTrace">
                    <div className={"pointerDirection__verticalTrace"} />
                </div>
                <div className="pointerDirection__center">
                    <div
                        className={getPointerClassName("center")}
                        onClick={() => handlePointerClick('center')}
                    />
                </div>
                <div className="pointerDirection__bottomTrace">
                    <div className={"pointerDirection__verticalTrace"}/>
                </div>
                <div className="pointerDirection__bottom">
                <div
                    className={getPointerClassName("bottom")}
                    onClick={() => handlePointerClick("bottom")}
                />
                </div>
                <div className="pointerDirection__right">
                    <div
                        className={getPointerClassName("right")}
                        onClick={() => handlePointerClick("right")}
                    />
                </div>
                <div className="pointerDirection__rightTrace">
                    <div className={"pointerDirection__horizontalTrace"}/>
                </div>
                <div className="pointerDirection__leftTrace">
                    <div className={"pointerDirection__horizontalTrace"} />

                </div>
                <div className="pointerDirection__left">
                <div
                    className={getPointerClassName("left")}
                    onClick={() => handlePointerClick("left")}
                />
                </div>
            </div>
        </>
    )
}

export default PointerDirection