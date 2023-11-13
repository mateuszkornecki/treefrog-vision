'use client'

import {useContext, useEffect, useState} from "react";
import Pointer from '@/components/Pointer';
import {notFound, useSearchParams} from "next/navigation";
import ThemeNameContext, {TThemeName} from "@/context/ThemeNameContext";
import THEMES from '@/THEMES.json';
import settingContext from "@/context/ConfigsContext";
import {isSeconds} from "@/app/utils/isSeconds";

type TAppContentProps = {
    onClick: () => void,
    exercise: string,
}
const exerciseNumbers = ["O1", "O2", "O3", "O4", "O5"];
type TExerciseNumber = typeof exerciseNumbers[number];
function AppContent({onClick, exercise}:TAppContentProps) {
    const isProduction = process.env.NODE_ENV === "production";
    const searchParams = useSearchParams();
    const alfaTestPassword = searchParams.get("password");
    const isValidAlfaTestPassword = process.env.NEXT_PUBLIC_TEST_PASSWORD === alfaTestPassword;


    useEffect(() => {
    if(!exerciseNumbers.includes(exercise)) {
        return notFound();
        }
    }, [exercise]);

    const  setting = useContext(settingContext);

    const themeName = useContext(ThemeNameContext);
    const iterationTime = searchParams.get("iterationTime") || setting.iterationTime;
    const delay = searchParams.get("delay") || setting.delay;

    isSeconds(iterationTime);
    isSeconds(delay);

    if (!isProduction || isValidAlfaTestPassword) {

        return (
            <>
                <Pointer
                    delay={delay}
                    iterationTime={iterationTime}
                    exercise={exercise}
                    color={THEMES[themeName].pointerColor}
                    onClick={onClick}
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

    function Page({params}: {params: {slug: TExerciseNumber}
    }) {
        const [themeName, setThemeName] = useState<TThemeName>('default');
function getRandomThemeName(): TThemeName {
    const themeNames = Object.keys(THEMES) as unknown as TThemeName[]
    return themeNames[Math.floor(Math.random() * themeNames.length)];
}

function changeThemeTo(themeName: TThemeName|"random") {
    if(themeName === "random") {
        const randomThemeName = getRandomThemeName();
        setThemeName(randomThemeName);
    } else {
        setThemeName(themeName);

    }
}

        return (<div className="App">
                <ThemeNameContext.Provider value={themeName}>
                <AppContent exercise={params.slug} onClick={()=> {
                    changeThemeTo("random");
                }}/>
                <style jsx global>
                    {`
                        .App {
                          text-align: center;
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          height: 100vh;
                          width: 100vw;
                          background-color: ${THEMES[themeName].backgroundColor};
                          transition: background-color 5s ease;
                        }
                        h3 {
                          max-width: 700px;
                        }
                    `}
                </style>

        </ThemeNameContext.Provider>
            </div>
        );
    }

    export default Page;
export type {TExerciseNumber};