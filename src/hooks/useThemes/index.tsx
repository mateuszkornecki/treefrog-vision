import {useState} from "react";
import {TTheme} from "../../components/ThemeSetter";
import data from "../../themes.json"


function useThemes() {
    const [themes, setThemes] = useState<TTheme[]>(data);

    return {themes, setThemes};
}

export default useThemes;