'use client'

import Link from 'next/link'
import React, {useContext, useEffect} from "react";
import ThemeNameContext from "@/context/ThemeNameContext";
import THEMES from "@/THEMES.json";

export default function NotFound() {
    const themeName = useContext(ThemeNameContext);
    const currentTheme = THEMES[themeName];

    return (
        <center>
        <div className={"container"}>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/">Return Home</Link>
            <style jsx>{`
              .container {
                height: 100vh;
                width: 100vw;
                background-color: ${currentTheme.backgroundColor};
                padding-top: 1rem;
              }
    `}</style>
        </div>
    </center>
    )
}