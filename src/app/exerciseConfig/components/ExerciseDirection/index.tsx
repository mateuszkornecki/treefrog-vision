import React, {ReactElement} from "react"
import './styles/style.css'
function ExerciseDirection(): ReactElement {
    return (
        <>
            <div className="exerciseDirection__container">
                <div className="exerciseDirection__top">top</div>
                <div className="exerciseDirection__topRadio">topClick</div>
                <div className="exerciseDirection__center">center</div>
                <div className="exerciseDirection__bottomRadio">bottomClick</div>
                <div className="exerciseDirection__bottom">bottom</div>
                <div className="exerciseDirection__right">right</div>
                <div className="exerciseDirection__rightRadio">rightClick</div>
                <div className="exerciseDirection__leftRadio">leftClick</div>
                <div className="exerciseDirection__left">left</div>
            </div>
        </>
    )
}

export default ExerciseDirection