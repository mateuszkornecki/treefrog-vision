"use client"

import {useContext} from "react"
import ThemeContext from "@/context/ThemeContext"

function Page(){
    const currentTheme = useContext(ThemeContext)

    return (
        <main className={"exerciseConfig"}>
            <div className="configs">
                <h1 className={"configsHeading"}>Ustawienia ćwiczenia</h1>
                <h2 className={"configHeading"}>Kolorystyka ćwiczenia:</h2>
                <h2 className={"configHeading"}>Wielkość obiektu:</h2>
                <h2 className={"configHeading"}>Prędkość poruszania się obiektu:</h2>
                <h2 className={"configHeading"}>Czas zatrzymania obiektu:</h2>
            </div>
        </main>
    )
}

export default Page