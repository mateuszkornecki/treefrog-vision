import {useState} from "react";
import {TTheme} from "../../components/ThemeSetter";

const initialThemes: TTheme[] = [
    {pointer: "red", background: "black"},
    {pointer: "hotpink", background: "lightblue"},
    {pointer: "blue", background: "green"},
];

function useThemes() {
    const [themes, setThemes] = useState(initialThemes);

    return {themes, setThemes};
}

export default useThemes;