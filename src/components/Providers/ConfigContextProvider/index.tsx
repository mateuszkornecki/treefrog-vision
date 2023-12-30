import {ReactNode, useEffect, useState} from "react"
import ConfigContext from "@/context/ConfigContext"
import CONFIGS from "@/CONFIGS.json"
import {TConfigName} from "@/types/TConfigName"

export default function ConfigContextProvider({children}:{children: ReactNode}) {
    const [currentConfigName,SetCurentConfigName] = useState<TConfigName>('default')
    const [currentConfig,SetCurentConfig] = useState(CONFIGS[currentConfigName])
    function changeConfigTo(newConfigName: TConfigName): void {
        SetCurentConfigName(newConfigName)
        SetCurentConfig(CONFIGS[newConfigName])
    }

    useEffect(() => {
        changeConfigTo(currentConfigName)
    },[currentConfigName])

    return (
        <ConfigContext.Provider value={{currentConfig: CONFIGS['default'], changeContextTo: changeConfigTo}}>
            {children}
        </ConfigContext.Provider>
            )
}