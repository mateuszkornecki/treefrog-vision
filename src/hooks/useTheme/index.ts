import {useContext} from "react";
import ThemeContext from "@/context/ThemeContext";

export default function useTheme() {
    // IMPORTANT NOTE: Must be used inside component that is wrapped with the ThemeContextProvider
    return useContext(ThemeContext)


}