import React, {ReactElement, useEffect, useState} from "react"
import "./styles/style.css"
import PausePlaceMarker from "../PausePlaceMarker"
import Direction from "@/app/enums/DDirection"
import getPossiblePausePlaces from "@/utils/getPossiblePausePlaces"

function PointerPausePlace(): ReactElement {
    type TPausePlaces = Direction[]
    const [pausePlaces, setPausePlaces] = useState<TPausePlaces>([])
    const [possiblePlaces, setPossiblePlaces] = useState<Direction[]>([])
    function handlePointerClick(clickPlace: Direction) {
                const isAlreadySaved = pausePlaces.find(el => el === clickPlace)

        //fail fast - this direction is already saved
        if(isAlreadySaved) {
            return
        }
        setPausePlaces(prevState => {
            return [...prevState, clickPlace]
        })
    }
    function isPossibleFor(direction:Direction) {
        return Boolean(possiblePlaces.find(el => el === direction))
    }

    function isSelectedFor(direction:Direction) {
        return Boolean(pausePlaces.find(el => el === direction))
    }

    useEffect(() => {
        const lastPausePlace = pausePlaces.at(-1)
        const possiblePlaces = getPossiblePausePlaces(pausePlaces)

        setPossiblePlaces(possiblePlaces)

    }, [pausePlaces.length])

               return (
            <div className="pointerDirection__container">
                    <PausePlaceMarker place={Direction.Top} pausePlaces={pausePlaces} onClick={handlePointerClick} canBeSelected={isPossibleFor(Direction.Top)} isSelected={isSelectedFor(Direction.Top)} />
                    <PausePlaceMarker place={Direction.Center} pausePlaces={pausePlaces} onClick={handlePointerClick} canBeSelected={isPossibleFor(Direction.Center)} isSelected={isSelectedFor(Direction.Center)}   />
                    <PausePlaceMarker place={Direction.Bottom} pausePlaces={pausePlaces} onClick={handlePointerClick} canBeSelected={isPossibleFor(Direction.Bottom)} isSelected={isSelectedFor(Direction.Bottom)} />
                    <PausePlaceMarker place={Direction.Right} pausePlaces={pausePlaces} onClick={handlePointerClick} canBeSelected={isPossibleFor(Direction.Right)} isSelected={isSelectedFor(Direction.Right)}  />
                    <PausePlaceMarker place={Direction.Left} pausePlaces={pausePlaces} onClick={handlePointerClick} canBeSelected={isPossibleFor(Direction.Left)} isSelected={isSelectedFor(Direction.Left)}  />
            </div>
    )
}

export default PointerPausePlace