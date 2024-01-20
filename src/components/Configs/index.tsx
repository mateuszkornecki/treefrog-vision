import {TConfigItemProps} from "@/components/ConfigItem"
import {ReactElement} from "react"

type TConfigsProps = {
    children: ReactElement<TConfigItemProps> | ReactElement<TConfigItemProps>[]
}
export default function Configs({children}: TConfigsProps) {
return (
    <div className={"configs"}>
        <h1 className={"configsHeading"}>Ustawienia ćwiczenia</h1>
        {children}
    </div>
)
}