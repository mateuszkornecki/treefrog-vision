import React, {ReactElement} from "react"
import './styles/style.css'
function ExerciseDirection(): ReactElement {
    return (
        <>
            <div className="exerciseTheme__container">
                <div className="exerciseTheme__top">top</div>
                <div className="exerciseTheme__topRadio">topClick</div>
                <div className="exerciseTheme__center">center</div>
                <div className="exerciseTheme__bottomRadio">bottomClick</div>
                <div className="exerciseTheme__bottom">bottom</div>
                <div className="exerciseTheme__right">right</div>
                <div className="exerciseTheme__rightRadio">rightClick</div>
                <div className="exerciseTheme__leftRadio">leftClick</div>
                <div className="exerciseTheme__left">left</div>
            </div>
        </>
    )
}

export default ExerciseDirection