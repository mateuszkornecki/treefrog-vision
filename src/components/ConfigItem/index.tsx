import {ReactNode} from "react"

type TConfigItemProps = {
    name: string
    children: ReactNode
}
export default function ConfigItem({name, children}: TConfigItemProps) {
    return (
        <>
            <h2 className={"configHeader"}>{name}:</h2>
            {children}
        </>
    )
}

export type {TConfigItemProps}