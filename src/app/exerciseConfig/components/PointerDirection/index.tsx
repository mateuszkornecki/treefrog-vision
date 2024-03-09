import React, {ReactElement, useState} from "react"
import './styles/style.css'

function PointerDirection(): ReactElement {

    type TDirection = "right" | "left" | "top" | "bottom"
    const [firstDirection, setFirstDirection] = useState<TDirection>()
    const [secondDirection, setSecondDirection] = useState<TDirection>()

    return (
        <>
            <div className="pointerDirection__container">
                <div className="pointerDirection__top">
                    <div
                        className={"pointerDirection__pointer pointerDirection__pointer--black"}
                        onClick={()=> handlePointerClick("top")}/>
                </div>
                <div className="pointerDirection__topTrace">
                    <div className={"pointerDirection__verticalTrace"} />
                </div>
                <div className="pointerDirection__center">
                    <div
                        className={"pointerDirection__pointer pointerDirection__pointer--black"}
                        onClick={() => handlePointerClick('center')}
                    />
                </div>
                <div className="pointerDirection__bottomTrace">
                    <div className={"pointerDirection__verticalTrace"}/>
                </div>
                <div className="pointerDirection__bottom">
                <div
                    className={"pointerDirection__pointer pointerDirection__pointer--black"}
                    onClick={() => handlePointerClick("bottom")}
                />
                </div>
                <div className="pointerDirection__right">
                    <div
                        className={"pointerDirection__pointer pointerDirection__pointer--black"}
                        onClick={() => handlePointerClick("right")}
                    />
                </div>
                <div className="pointerDirection__rightTrace">
                    <div className={"pointerDirection__horizontalTrace"}/>
                </div>
                <div className="pointerDirection__leftTrace">
                    <div className={"pointerDirection__horizontalTrace"}/>

                </div>
                <div className="pointerDirection__left">
                <div
                    className={"pointerDirection__pointer pointerDirection__pointer--black"}
                    onClick={() => handlePointerClick("left")}
                />
                </div>
            </div>
        </>
    )
}

export default PointerDirection