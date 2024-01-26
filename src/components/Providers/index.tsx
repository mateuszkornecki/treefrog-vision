"use client"

import {ReactNode} from "react"
import ConfigContextProvider from '@/components/Providers/ConfigContextProvider'
type TProvidersProps = {
    children: ReactNode
}
function Providers({children}: TProvidersProps) {

    return (
            <ConfigContextProvider>
            {children}
            </ConfigContextProvider>
    )
}
export default Providers