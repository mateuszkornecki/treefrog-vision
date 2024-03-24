import React, {ReactElement, useEffect, useState} from "react"
import getPossiblePausePlaces from "@/utils/getPossiblePausePlaces"
import Direction from "@/app/enums/DDirection"

export type TPausePlaceMarkerProps = {
    place: Direction
    pausePlaces: Direction[],
    onClick: (place: Direction) => void
}

        export default function PausePlaceMarker({place, pausePlaces, onClick}: TPausePlaceMarkerProps):ReactElement {
    const [possiblePlaces, setPossiblePlaces]  = useState(() => getPossiblePausePlaces([...pausePlaces, place]))
    const [good, setGood] = useState(false)
    const [sisSelected, setSisSelected] = useState(false)

    useEffect(() => {
        const testIfSelected = Boolean(pausePlaces .find(el => el === place))
        setSisSelected(testIfSelected)


        const testIfGoodClick =  Boolean(possiblePlaces.find(el => el === place) || !pausePlaces.length)
        setGood((testIfGoodClick))

        setPossiblePlaces([...pausePlaces, place])
        console.log('BUKA', possiblePlaces)

    }, [pausePlaces, place])

    const colorOfOtherMarkers = good ? "black" : "gray"
    const cursor = good || sisSelected ? "pointer" : "not-allowed"
    return (
        <>
            <style jsx>{`
                    .blockPausePlaceMarker {
                        background: ${sisSelected ? "green" : colorOfOtherMarkers};
                        height: 2rem;
                        width: 2rem;
                        border-radius: 50%;
                        cursor: ${cursor}
                    }
                `}</style>
            <div
                onClick={good ? () => {
                    onClick(place)
                    setSisSelected(true)
                } : () =>{}}
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