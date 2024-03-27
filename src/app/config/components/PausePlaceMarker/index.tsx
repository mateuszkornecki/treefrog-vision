import React, {ReactElement, useEffect, useState} from "react"
import Direction from "../../../enums/Direction"

export type TPausePlaceMarkerProps = {
    place: Direction
    pausePlaces: Direction[],
    onClick: (place: Direction) => void
    isSelected: boolean,
    canBeSelected: boolean
}

        export default function PausePlaceMarker({place, pausePlaces, onClick, isSelected, canBeSelected}: TPausePlaceMarkerProps):ReactElement {
    const [good, setGood] = useState(false)

    const markerColor  = isSelected? "green" : canBeSelected ? "black" : "gray"
    const cursor = isSelected || canBeSelected ? "pointer" : "not-allowed"
    return (
        <>
            <style jsx>{`
                    .blockPausePlaceMarker {
                        background: ${markerColor};
                        height: 2rem;
                        width: 2rem;
                        border-radius: 50%;
                        cursor: ${cursor}
                    }
                `}</style>
            <div
                onClick={canBeSelected ? () => {onClick(place)} : () =>{}}
                className={`blockPausePlaceMarker pointerDirection__${place}
            } `}
            />
            <div className={`pointerDirection__${place}Trace`}>
                {/*We dont want to render trace for centre place!*/}
                {place !== Direction.Center && <div className={`pointerDirection__${( place === Direction.Bottom || place === Direction.Top) ? "vertical" : "horizontal"}Trace`}/>}
            </div>
        </>
    )
}