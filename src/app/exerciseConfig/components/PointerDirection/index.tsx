import React, {ReactElement, useEffect, useState} from "react"
import './styles/style.css'
import {identity} from "rxjs"
import {TDirectionMode} from "@/components/Pointer"

function PointerDirection(): ReactElement {

    type TDirection = "right" | "left" | "top" | "bottom"
    const [firstDirection, setFirstDirection] = useState<TDirection>()
    const [secondDirection, setSecondDirection] = useState<TDirection>()

    return (
        <>
            <div className="pointerDirection__container">
                <div className="pointerDirection__top">
                    <div className={"pointerDirection__pointer--black"}/>
                </div>
                <div className="pointerDirection__topTrace">
                    <div className={"pointerDirection__verticalTrace"} />
                </div>
                <div className="pointerDirection__center">
                    <div className={"pointerDirection__pointer"}/>
                </div>
                <div className="pointerDirection__bottomTrace">
                    <div className={"pointerDirection__verticalTrace"}/>
                </div>
                <div className="pointerDirection__bottom">
                <div className={"pointerDirection__pointer--black"}/>
                </div>
                <div className="pointerDirection__right">
                    <div className={"pointerDirection__pointer--black"}/>
                </div>
                <div className="pointerDirection__rightTrace">
                    <div className={"pointerDirection__horizontalTrace"}/>
                </div>
                <div className="pointerDirection__leftTrace">
                    <div className={"pointerDirection__horizontalTrace"}/>

                </div>
                <div className="pointerDirection__left">
                <div className={"pointerDirection__pointer--black"}/>
                </div>
            </div>
        </>
    )
}

export default PointerDirection