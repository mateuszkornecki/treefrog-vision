import React, {ReactElement, useEffect, useState} from "react"
import './styles/style.css'
import {identity} from "rxjs"

type TActiveDirection = 'top' | 'bottom' | 'right' | 'left' | 'none'

type TPickerProps = {
    onClick?: () => void,
    isActive: boolean,
    direction: TActiveDirection
}

//TODO extract component to a separate file!
function Picker({onClick, isActive, direction}: TPickerProps) {
    const pickerClassName = direction === 'top' || direction === "bottom" ? "pointerDirection__picker--vertical" : "pointerDirection__picker--horizontal"

    return (
        <>
            <style jsx>
                {`
                    .pointerDirection__picker--vertical {
                        width: 3px;
                        height: 100%;
                        background: ${isActive ? 'green' : 'black'};
                    }

                    .pointerDirection__picker--horizontal {
                        height: 3px;
                        width: 100%;
                        background: ${isActive ? 'green' : 'black'};
                    }
                    
                    .pointerDirection__picker--vertical:hover {
                        cursor: pointer;
                    }    
                    
                    .pointerDirection__picker--horizontal:hover {
                        cursor: pointer;
                    }
            `}
        </style>
        <div
            className={pickerClassName}
            onClick={onClick}
        />
    </>
    )
}

function PointerDirection(): ReactElement {
    const [activeDirection, setActiveDirection] = useState<TActiveDirection>('top')

    return (
        <>
            <div className="pointerDirection__container">
                <div className="pointerDirection__top">
                    <div className={"pointerDirection__pointer--black"}/>
                </div>
                <div className="pointerDirection__topPicker">
                    <Picker isActive={activeDirection === 'top'}  direction={'top'} onClick={()=> setActiveDirection('top')} />
                </div>
                <div className="pointerDirection__center">
                    <div className={"pointerDirection__pointer"}/>
                </div>
                <div className="pointerDirection__bottomPicker">
                    <Picker isActive={activeDirection === 'bottom'} direction={'bottom'} onClick={()=> setActiveDirection('bottom')} />

                </div>
                <div className="pointerDirection__bottom">
                    <div className={"pointerDirection__pointer--black"}/>
                </div>
                <div className="pointerDirection__right">
                    <div className={"pointerDirection__pointer--black"}/>
                </div>
                <div className="pointerDirection__rightPicker">
                    <Picker isActive={activeDirection === 'right'}  direction={'right'} onClick={()=> setActiveDirection('right')} />
                </div>
                <div className="pointerDirection__leftPicker">
                    <Picker isActive={activeDirection === 'left'}  direction={'left'} onClick={()=> setActiveDirection('left')} />
                </div>
                <div className="pointerDirection__left">
                    <div className={"pointerDirection__pointer--black"}/>
                </div>
            </div>
        </>
    )
}

export default PointerDirection