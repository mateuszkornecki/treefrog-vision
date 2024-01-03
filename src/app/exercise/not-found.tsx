'use client'

import Link from 'next/link';
import React from "react";
import useTheme from "@/hooks/useTheme";

export default function NotFound() {
    const {theme} = useTheme()

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
                background-color: ${theme.backgroundColor};
                padding-top: 1rem;
              }
    `}</style>
        </div>
    </center>
    )
}