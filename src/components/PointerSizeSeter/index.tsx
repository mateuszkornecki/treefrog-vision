import React from "react";

type PointerSizeSetterProps = {
    onSizeClick: (newSize) => void
}
const PointerSizeSetter = ({onSizeClick}: PointerSizeSetterProps) => {

    return <fieldset className={"options"}>
        <legend>Pointer size</legend>
        <input value={"tiny"} onClick={() => onSizeClick("tiny")}/>
        <input value={"regular"} onClick={() => onSizeClick("regular")}/>
        <input value={"large"} onClick={() => onSizeClick("large")}/>
    </fieldset>
}

export default PointerSizeSetter;