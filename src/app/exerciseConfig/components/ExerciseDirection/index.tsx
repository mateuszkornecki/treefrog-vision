import React, {ReactElement} from "react"
import './styles/style.css'
function ExerciseDirection(): ReactElement {

    return (
        <>
            <div className="exerciseDirection__container">
                <div className="exerciseDirection__top">
                    <div className={"exerciseDirection__pointer--black"}/>
                </div>
                <div className="exerciseDirection__topRadio">topRadio</div>
                <div className="exerciseDirection__center">
                    <div className={"exerciseDirection__pointer"}/>
                </div>
                <div className="exerciseDirection__bottomRadio">bottomRadio</div>
                <div className="exerciseDirection__bottom">
                    <div className={"exerciseDirection__pointer--black"}/>
                </div>
                <div className="exerciseDirection__right">
                    <div className={"exerciseDirection__pointer--black"}/>
                </div>
                <div className="exerciseDirection__rightRadio">rightRadio</div>
                <div className="exerciseDirection__leftRadio">leftRadio</div>
                <div className="exerciseDirection__left">
                    <div className={"exerciseDirection__pointer--black"}/>
                </div>
            </div>
        </>
    )
}

export default ExerciseDirection