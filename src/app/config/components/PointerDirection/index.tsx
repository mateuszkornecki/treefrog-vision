import React, {ReactElement, useEffect, useState} from "react"
import './styles/style.css'
import PausePlaceMarker from  '../PausePlaceMarker'
import Direction from '@/app/enums/DDirection'
import getPossiblePausePlaces from "@/utils/getPossiblePausePlaces"

function PointerPausePlace(): ReactElement {
    type TPausePlaces = Direction[]
    const [pausePlaces, setPausePlaces] = useState<TPausePlaces>([])

    function handlePointerClick(clickPlace: Direction) {
                const isAlreadySaved = pausePlaces.find(el => el === clickPlace)

        //fail fast - this direction is already saved
        if(isAlreadySaved) {
            return
        }
        const kot = getPossiblePausePlaces([...pausePlaces, clickPlace])
console.log({kot})

        setPausePlaces(prevState => {
            return [...prevState, clickPlace]
        })
    }

    useEffect(() => {
        console.log({pausePlaces})
    }, [pausePlaces.length])

               return (
            <div className="pointerDirection__container">
                    <PausePlaceMarker place={Direction.Top} pausePlaces={pausePlaces} onClick={handlePointerClick} />
                    <PausePlaceMarker place={Direction.Center} pausePlaces={pausePlaces} onClick={handlePointerClick} />
                    <PausePlaceMarker place={Direction.Bottom} pausePlaces={pausePlaces} onClick={handlePointerClick} />
                    <PausePlaceMarker place={Direction.Right} pausePlaces={pausePlaces} onClick={handlePointerClick} />
                    <PausePlaceMarker place={Direction.Left} pausePlaces={pausePlaces} onClick={handlePointerClick} />
            </div>
    )
}

export default PointerPausePlace