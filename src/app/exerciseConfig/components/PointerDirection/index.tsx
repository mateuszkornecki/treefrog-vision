import React, {ReactElement} from "react"
import './styles/style.css'
function PointerDirection(): ReactElement {

    return (
        <>
            <div className="pointerDirection__container">
                <div className="pointerDirection__top">
                    <div className={"pointerDirection__pointer--black"}/>
                </div>
                <div className="pointerDirection__topRadio">topRadio</div>
                <div className="pointerDirection__center">
                    <div className={"pointerDirection__pointer"}/>
                </div>
                <div className="pointerDirection__bottomRadio">bottomRadio</div>
                <div className="pointerDirection__bottom">
                    <div className={"pointerDirection__pointer--black"}/>
                </div>
                <div className="pointerDirection__right">
                    <div className={"pointerDirection__pointer--black"}/>
                </div>
                <div className="pointerDirection__rightRadio">rightRadio</div>
                <div className="pointerDirection__leftRadio">leftRadio</div>
                <div className="pointerDirection__left">
                    <div className={"pointerDirection__pointer--black"}/>
                </div>
            </div>
        </>
    )
}

export default PointerDirection