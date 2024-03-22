import React, {ReactElement, useEffect, useState} from "react"
import './styles/style.css'

function PointerPausePlace(): ReactElement {

    enum Direction {
        Top = 'top',
        Right = 'right',
        Bottom = 'bottom',
        Left = 'left',
        Center = 'center'
    }


type TPausePlaces = Direction[]

    const [pausePlaces, setPausePlaces] = useState<TPausePlaces>([])
    const [traces, setTraces] = useState<Direction[]>([])

    function getPossibleClickPlaces() :Direction[] | void {
        switch (pausePlaces.length) {
            case 0:
                return [Direction.Top, Direction.Right, Direction.Bottom, Direction.Left, Direction.Center]
            case 1:
                switch (pausePlaces[0]) {
                    case Direction.Top:
                        return [Direction.Bottom, Direction.Center]
                    case Direction.Right:
                        return [Direction.Left, Direction.Center]
                    case  Direction.Bottom:
                        return [Direction.Center, Direction.Top]
                    case Direction.Left:
                        return [Direction.Center, Direction.Right]
                    case Direction.Center:
                        return [Direction.Top, Direction.Right, Direction.Bottom, Direction.Left]
                }
            case 2:
                break
        }
        return [Direction.Top, Direction.Top]
    }

    function handlePointerClick(clickPlace: Direction) {
        const isAlreadySaved = pausePlaces.find(el => el === clickPlace)


        //fail fast - this direction is already saved
        if(isAlreadySaved) {
            return
        }

        setPausePlaces(prevState => [...prevState, clickPlace])
           }

           function getPointerColorClassName(direction: Direction): string  {
               if(direction === pausePlaces[0] || direction ===pausePlaces[1]) {
                   return "pointerDirection__pointer pointerDirection__pointer pointerDirection__pointer--green"
               } else {
                   return "pointerDirection__pointer pointerDirection__pointer pointerDirection__pointer--black"
               }
           }

    return (
        <>
            <div className="pointerDirection__container">
                <div className="pointerDirection__top">
                    <div
                        className={getPointerColorClassName(Direction.Top)}
                        onClick={()=> handlePointerClick(Direction.Top)}
                    />
                </div>
                <div className="pointerDirection__topTrace">
                    <div className={"pointerDirection__verticalTrace"} />
                </div>
                <div className="pointerDirection__center">
                    <div
                        className={getPointerColorClassName(Direction.Center)}
                        onClick={() => handlePointerClick(Direction.Center)}
                    />
                </div>
                <div className="pointerDirection__bottomTrace">
                    <div className={"pointerDirection__verticalTrace"}/>
                </div>
                <div className="pointerDirection__bottom">
                <div
                    className={getPointerColorClassName(Direction.Bottom)}
                    onClick={() => handlePointerClick(Direction.Bottom)}
                />
                </div>
                <div className="pointerDirection__right">
                    <div
                        className={getPointerColorClassName(Direction.Right)}
                        onClick={() => handlePointerClick(Direction.Right)}
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
                    className={getPointerColorClassName(Direction.Left)}
                    onClick={() => handlePointerClick(Direction.Left)}
                />
                </div>
                <style jsx>{`
                    //Fade the pointers that are not selected if it is not possible to select more directions
                    .pointerDirection__pointer--black {
                        background: ${pausePlaces.length > 2 ? "rgba(0,0,0,0.5)" : "black"};
                    }
                    .pointerDirection__pointer {
                        background: hotpink;
                    }
                    
                `}</style>
            </div>
        </>
    )
}

export default PointerPausePlace