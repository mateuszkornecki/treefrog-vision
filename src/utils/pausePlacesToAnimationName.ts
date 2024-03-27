import Direction from "../app/enums/Direction"
import {TAnimationName} from "@/components/Pointer"
import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter"

export default function pausePlacesToAnimationName (pausePlaces: Direction[]):TAnimationName {
    return  pausePlaces
        .map((place, index) => index === 0 ? place : capitalizeFirstLetter(place))
        .join()
        .replace(',','To') as unknown as TAnimationName
}