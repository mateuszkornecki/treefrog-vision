import React from "react";
import './PointerSizeSetter.css';

type PointerSizeSetterProps = {
    onSizeClick: (newSize) => void
}
const PointerSizeSetter = ({onSizeClick}: PointerSizeSetterProps) => {

    return <fieldset className={"options"}>
        <legend className={"pointerSizeInput__legend"}>Pointer size</legend>
        <input className={"pointerSizeInput pointerSizeInput--tiny"} type="radio" value="tiny" name="pointerSize"
               onChange={() => onSizeClick("tiny")}/>
        <input className={"pointerSizeInput pointerSizeInput--regular"} type="radio" value="regular" name="pointerSize"
               defaultChecked={true}
               onChange={() => onSizeClick("regular")}/>
        <input className={"pointerSizeInput pointerSizeInput--large"} type="radio" value="large" name="pointerSize"
               onChange={() => onSizeClick("large")}
        />
    </fieldset>
}

export default PointerSizeSetter;