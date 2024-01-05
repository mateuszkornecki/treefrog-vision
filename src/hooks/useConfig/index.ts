import {useContext} from "react";
import ConfigContext from "@/context/ConfigContext";

export default function useConfig() {
    // IMPORTANT NOTE: Must be used inside component that is wrapped with the ConfigContextProvider
    return useContext(ConfigContext)


}