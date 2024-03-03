import React, {ReactElement} from "react"
import './styles/style.css'
function ExerciseDirection(): ReactElement {
    return (
        <>
            <div className="exerciseDirection__container">
                <div className="exerciseDirection__top">top</div>
                <div className="exerciseDirection__topRadio">topRadio</div>
                <div className="exerciseDirection__center">center</div>
                <div className="exerciseDirection__bottomRadio">bottomRadio</div>
                <div className="exerciseDirection__bottom">bottom</div>
                <div className="exerciseDirection__right">right</div>
                <div className="exerciseDirection__rightRadio">rightRadio</div>
                <div className="exerciseDirection__leftRadio">leftRadio</div>
                <div className="exerciseDirection__left">left</div>
            </div>
        </>
    )
}

export default ExerciseDirection