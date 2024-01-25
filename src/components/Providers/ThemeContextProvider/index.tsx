import {ReactNode, useEffect, useState} from "react";
import {TThemeName} from "@/types/TTheme";
import CONFIG from '@/constants/CONFIG.json'
import ConfigContext from "@/context/ConfigContext";
import {TConfig} from "@/types/TConfig"
import useConfig from "@/hooks/useConfig"

type TConfigContextProviderProps = {
    children: ReactNode
}
export function ConfigContextProvider({children}:TConfigContextProviderProps) {
    const [themeName, setThemeName] = useState<TThemeName>("default")
    function changeThemeNameTo(newThemeName:TThemeName) {
        setThemeName(newThemeName)
    }

    const initialConfig:TConfig = {...CONFIG, themeName,changeThemeNameTo}
    const [config, setConfig] = useState<TConfig>(initialConfig)


    useEffect(() => {
        setConfig(prevState => {
            return {...prevState,themeName}
        })
    }, [themeName])


    return (
        <ConfigContext.Provider value={config}>
            {children}
        </ConfigContext.Provider>
    )
}export default ConfigContextProvider

