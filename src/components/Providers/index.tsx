"use client"

import {ReactNode} from "react"
import ThemeContextProvider from "./ThemeContextProvider"
import ConfigContextProvider from "@/components/Providers/ConfigContextProvider";

type TProvidersProps = {
    children: ReactNode
}

function Providers({children}: TProvidersProps) {


    return (
        <ThemeContextProvider>
            <ConfigContextProvider>
            {children}
            </ConfigContextProvider>
        </ThemeContextProvider>
    )
}
export default Providers