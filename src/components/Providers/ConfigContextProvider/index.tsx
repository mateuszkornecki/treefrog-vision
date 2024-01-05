import {ReactNode, useEffect, useState} from "react"
import ConfigContext from "@/context/ConfigContext"
import CONFIGS from "@/CONFIGS.json"
import {TConfigName} from "@/types/TConfigName"

export default function ConfigContextProvider({children}:{children: ReactNode}) {
    const [configName,setConfigName] = useState<TConfigName>('default')
    const [config,setConfig] = useState(CONFIGS[configName])
    function changeConfigTo(newConfigName: TConfigName): void {
        setConfigName(newConfigName)
        setConfig(CONFIGS[newConfigName])
    }

    useEffect(() => {
        changeConfigTo(configName)
    },[configName])

    return (
        <ConfigContext.Provider value={{config: config, changeConfigTo: changeConfigTo}}>
            {children}
        </ConfigContext.Provider>
            )
}