import {useState} from "react";
import {Theme} from "../../components/ThemeSetter";

const initialThemes: Theme[] = [
    {pointer: "red", background: "black"},
    {pointer: "hotpink", background: "lightblue"},
    {pointer: "blue", background: "green"},
];

function useThemes() {
    const [themes, setThemes] = useState(initialThemes);

    return {themes, setThemes};
}

export default useThemes;