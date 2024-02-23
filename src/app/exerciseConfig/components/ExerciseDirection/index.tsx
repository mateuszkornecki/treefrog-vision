import React, {ReactElement} from "react"
import './styles/style.css'
function ExerciseDirection(): ReactElement {
    return (
        <>
            <div className="exerciseDirection__container">
                <div className="exerciseDirection__item exerciseDirection__item--LT">LT</div>
                <div className="exerciseDirection__item exerciseDirection__item--RC">RC</div>
                <div className="exerciseDirection__item exerciseDirection__item--RT">RT</div>
                <div className="exerciseDirection__item exerciseDirection__item--RB">RB</div>
                <div className="exerciseDirection__item exerciseDirection__item--CB">CB</div>
                <div className="exerciseDirection__item exerciseDirection__item--CT">CT</div>
                <div className="exerciseDirection__item exerciseDirection__item--LC">LC</div>
                <div className="exerciseDirection__item exerciseDirection__item--LB">LB</div>
                <div className="exerciseDirection__item exerciseDirection__item--CC">CC</div>
            </div>
        </>
    )
}
export default ExerciseDirection