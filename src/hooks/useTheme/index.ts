import {TTheme} from "@/types/TTheme"
import {THEMES} from "@/constants/THEMES"
import useConfig from "@/hooks/useConfig"

export default function useTheme():TTheme {
    const {themeName} = useConfig()
    return THEMES[themeName]
}