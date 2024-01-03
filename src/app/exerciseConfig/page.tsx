"use client"

import useTheme from "@/hooks/useTheme";

function Page(){
    const {theme} = useTheme()

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