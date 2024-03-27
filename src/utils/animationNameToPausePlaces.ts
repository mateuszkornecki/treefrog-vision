import DDirection from "../app/enums/Direction"
import Direction from "../app/enums/Direction"
import {TAnimationName} from "@/components/Pointer"

export default function animationNameToPausePlaces(animationName: TAnimationName): DDirection[] {

     ["to", "yo"].filter(el => el !== "to")

     return animationName
         .split(/(?=[A-Z])/)
         .map(word => word
             .toLowerCase())
         .filter(el => el !== "to") as unknown as Direction[]
}