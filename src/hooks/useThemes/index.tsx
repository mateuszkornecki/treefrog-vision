import {useState} from "react";

const initialThemes = [
    {pointer: "red", background: "black"},
    {pointer: "hotpink", background: "lightblue"},
    {pointer: "blue", background: "green"},
];

function useThemes() {
    const [themes, setThemes] = useState(initialThemes);

    return {themes, setThemes};
}

export default useThemes;