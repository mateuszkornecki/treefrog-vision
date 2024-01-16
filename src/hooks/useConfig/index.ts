import {useContext} from "react";
import ConfigContext from "@/context/ConfigContext";
import {TConfig} from "@/types/TConfig"

export default function useConfig(): TConfig {
    const ala = useContext(ConfigContext)
    // IMPORTANT NOTE: Must be used inside component that is wrapped with the ConfigContextProvider
    return useContext(ConfigContext)


}