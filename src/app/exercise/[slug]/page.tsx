'use client'

import {useContext, useEffect, useState} from "react"
import Pointer from '@/components/Pointer'
import {notFound, useSearchParams} from "next/navigation"
import configCOntext from "@/context/ConfigContext"
import {isSeconds} from "@/utils/isSeconds"
import ThemeContext from "@/context/ThemeContext"

type TAppContentProps = {
    exercise: string,
}
const exerciseNumbers = ["O1", "O2", "O3", "O4", "O5"]
type TExerciseNumber = typeof exerciseNumbers[number]
function AppContent({exercise}:TAppContentProps) {
    const isProduction = process.env.NODE_ENV === "production"
    const searchParams = useSearchParams()
    const alfaTestPassword = searchParams.get("password")
    const isValidAlfaTestPassword = process.env.NEXT_PUBLIC_TEST_PASSWORD === alfaTestPassword


    useEffect(() => {
    if(!exerciseNumbers.includes(exercise)) {
        return notFound()
        }
    }, [exercise]);

    const {currentConfig} = useContext(configCOntext)
    const {currentTheme} = useContext(ThemeContext)

    const iterationTime = searchParams.get("iterationTime") || currentConfig.iterationTime
    const delay = searchParams.get("delay") || currentConfig.delay

    isSeconds(iterationTime)
    isSeconds(delay)

    if (!isProduction || isValidAlfaTestPassword) {

        return (
            <>
                <Pointer
                    delay={delay}
                    iterationTime={iterationTime}
                    exercise={exercise}
                    color={currentTheme.pointerColor}
                />
            </>
        );
    } else if (isProduction) {
        return (
            <center>
                <h3>
                    Hi, We are very pleased that you visited us!

                    In the future, you will find here a great (or at least we hope so) tool that will help you work on your field of vision.
                    At the moment, we are still working on the application, we are doing everything we can to make it good and, most importantly, helpful.

                    See you soon, and we will get back to work on the app...
                </h3>
            </center>
        )
    }
}

    function Page({params}: {params: {slug: TExerciseNumber}}) {
    const {currentTheme} = useContext(ThemeContext)
        const [backgroundColor, setBackgroundColor] = useState(currentTheme.backgroundColor)

        useEffect(() => {
            setBackgroundColor(currentTheme.backgroundColor)
        }, []);
        return (
            <main className="exercise">
                <AppContent exercise={params.slug} />
                <style jsx global>
                    {`
                      .exercise {
                        text-align: center;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 100vh;
                        width: 100vw;
                        background-color: ${backgroundColor};
                        transition: background-color 5s ease;
                      }

                      h3 {
                        max-width: 700px;
                      }
                    `}
                </style>
            </main>
        );
    }

    export default Page
export type {TExerciseNumber
};