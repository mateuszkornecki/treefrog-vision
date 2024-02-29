import React, {ReactElement} from "react"
import './styles/style.css'
function ExerciseDirection(): ReactElement {
    return (
        <>
            <div className="exerciseTheme__container">
                <div className="exerciseTheme__top">top</div>
                <div className="exerciseTheme__topClick">topClick</div>
                <div className="exerciseTheme__center">center</div>
                <div className="exerciseTheme__bottomClick">bottomClick</div>
                <div className="exerciseTheme__bottom">bottom</div>
                <div className="exerciseTheme__right">right</div>
                <div className="exerciseTheme__rightClick">rightClick</div>
                <div className="exerciseTheme__leftClick">leftClick</div>
                <div className="exerciseTheme__left">left</div>
            </div>
        </>
    )
}

export default ExerciseDirection