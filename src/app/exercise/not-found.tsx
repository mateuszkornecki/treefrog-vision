'use client'

import Link from 'next/link'
import React, {useContext} from "react";
import {ThemeContext} from "@/Providers";

export default function NotFound() {
    const {currentTheme} = useContext(ThemeContext);

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