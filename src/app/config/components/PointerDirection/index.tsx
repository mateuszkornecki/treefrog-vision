import React, {ReactElement, useEffect, useState} from "react"
import './styles/style.css'

function PointerDirection(): ReactElement {

    type TDirection = "right" | "left" | "top" | "bottom" | "center"

    const ALLOW_TO_SELECT = 2
    const [directions, setDirections] = useState<TDirection[]>([])
    const [traces, setTraces] = useState<TDirection[]>([])
    const [hasAllSelected, setHasAllSelected] = useState(false)

    const directionsString = JSON.stringify(directions)
    useEffect(() => {
        // All available directions already selected
        setHasAllSelected(directions.length === ALLOW_TO_SELECT)

    }, [directionsString, directions.length])

    // Reset directions when the page is reloaded
    useEffect(() => {
        setDirections([])
    }, [])

    function handlePointerClick(direction: TDirection) {
        const isAlreadySaved = directions.find(el => el === direction)
        const hasEnoughDirections = directions.length === ALLOW_TO_SELECT

        //fail fast - this direction is already saved or all possible directions has been selected
        if(isAlreadySaved || hasEnoughDirections) {
            return
        }

        //reset all selected directions
        if (hasEnoughDirections) {
            return
        } else {
            setDirections(prevState => [...prevState, direction])
        }
           }

           function getPointerColorClassName(direction: string): string  {
               if(direction === directions[0] || direction ===directions[1]) {
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
                        className={getPointerColorClassName("top")}
                        onClick={()=> handlePointerClick("top")}
                    />
                </div>
                <div className="pointerDirection__topTrace">
                    <div className={"pointerDirection__verticalTrace"} />
                </div>
                <div className="pointerDirection__center">
                    <div
                        className={getPointerColorClassName("center")}
                        onClick={() => handlePointerClick('center')}
                    />
                </div>
                <div className="pointerDirection__bottomTrace">
                    <div className={"pointerDirection__verticalTrace"}/>
                </div>
                <div className="pointerDirection__bottom">
                <div
                    className={getPointerColorClassName("bottom")}
                    onClick={() => handlePointerClick("bottom")}
                />
                </div>
                <div className="pointerDirection__right">
                    <div
                        className={getPointerColorClassName("right")}
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
                    className={getPointerColorClassName("left")}
                    onClick={() => handlePointerClick("left")}
                />
                </div>
                <style jsx>{`
                    .pointerDirection__pointer--black {
                        background: ${hasAllSelected ? "rgba(0,0,0,0.5)" : "black"};
                    }
                `}</style>
            </div>
        </>
    )
}

export default PointerDirection