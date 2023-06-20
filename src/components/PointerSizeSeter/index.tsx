import React from "react";
import './PointerSizeSetter.css';

type PointerSizeSetterProps = {
    onSizeClick: (newSize) => void
}
const PointerSizeSetter = ({onSizeClick}: PointerSizeSetterProps) => {

    return <fieldset className={"options"}>
        <legend>Pointer size</legend>
        <input className={"pointerSizeInput"} type="radio" value="tiny" name="pointerSize"
               onChange={() => onSizeClick("tiny")}/>
        <input className={"pointerSizeInput"} type="radio" value="regular" name="pointerSize" defaultChecked={true}
               onChange={() => onSizeClick("regular")}/>
        <input className={"pointerSizeInput"} type="radio" value="large" name="pointerSize"
               onChange={() => onSizeClick("large")}/>
    </fieldset>
}

export default PointerSizeSetter;