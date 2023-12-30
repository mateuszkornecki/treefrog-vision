"use client"

import {ReactNode} from "react"
import ThemeContextProvider from "./ThemeContextProvider"

type TProvidersProps = {
    children: ReactNode
}

function Providers({children}: TProvidersProps) {


    return (
        <ThemeContextProvider>
            {children}
        </ThemeContextProvider>
    )
}
export default Providers