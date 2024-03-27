import {TExerciseNumber} from "@/app/exercise/[slug]/page";
import {TAnimationName} from "@/components/Pointer";

export default  function getNextAnimationName(exercise: TExerciseNumber, previousDirectionMode: string): TAnimationName  {

    const INVALID_DIRECTION_MODE_ERROR  = "Invalid directionMode!"
    if(exercise === "O1") {
        if (previousDirectionMode === 'centerToLeft') {
            return 'leftToCenter';
        } else if (previousDirectionMode === 'leftToCenter') {
            return 'centerToRight';
        } else if (previousDirectionMode === 'rightToCenter') {
            return 'centerToLeft';
        } else if (previousDirectionMode === 'centerToRight') {
            return 'rightToCenter';
        } else {
            throw new Error(INVALID_DIRECTION_MODE_ERROR);
        }
    } else if(exercise === "O2") {
        if (previousDirectionMode === 'centerToLeft') {
            return 'leftToRight';
        } else if (previousDirectionMode === 'leftToRight') {
            return 'rightToLeft';
        } else if (previousDirectionMode === 'rightToLeft') {
            return 'leftToRight';
        } else {
            throw new Error(INVALID_DIRECTION_MODE_ERROR);
        }
    } else if(exercise === "O3") {
        if (previousDirectionMode === 'centerToLeft') {
            return 'leftToCenter';
        } else if (previousDirectionMode === 'leftToCenter') {
            return 'centerToLeft';
        } else {
            throw new Error(INVALID_DIRECTION_MODE_ERROR);
        }
    } else if(exercise === "O4") {
        if (previousDirectionMode === 'centerToRight') {
            return 'rightToCenter';
        } else if (previousDirectionMode === 'rightToCenter') {
            return 'centerToRight';
        } else {
            throw new Error(INVALID_DIRECTION_MODE_ERROR);
        }
    } else if(exercise === "O5") {
        if (previousDirectionMode === "centerToTop") {
            return "topToCenter";
        } else if (previousDirectionMode === "topToCenter") {
            return "centerToBottom";
        } else if (previousDirectionMode === "centerToBottom") {
            return "bottomToCenter";
        } else if (previousDirectionMode === "bottomToCenter") {
            return "centerToTop";
        } else {
            throw new Error(INVALID_DIRECTION_MODE_ERROR);
        }
    } else {
        throw new Error("Incorrect exercise number!")
    }
}

