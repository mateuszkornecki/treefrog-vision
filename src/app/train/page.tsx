'use client'

import Pointer from '@/components/Pointer';
import useTheme from "@/hooks/useTheme";
import {useSearchParams} from "next/navigation";
import './page.css';
import {useState} from "react";
function App() {
    const {theme,changeToRandomTheme} = useTheme();
    const searchParams = useSearchParams();
    const exerciseNumber = searchParams.get("exercise");
    const testPassword = searchParams.get("password");
    const env = process.env.NODE_ENV;
    const isValidTestPassword = process.env.NEXT_PUBLIC_TEST_PASSWORD === testPassword;
    const WIPMessage = "Hi! We are very pleased that you visited us! In the future, you will find here a great (or at least we hope so) tool that will help you work on your field of vision. At the moment, we are still working on the application, we are doing everything we can to make it good and, most importantly, helpful. See you soon, and we'll get back to work on the app..."
const valisExerciseNumbers = ['O1', 'O2'];
    const isProdlikeEnv = true;
    const [exercise, setExercise] = useState(
        <div className="App">
        <Pointer
    directionMode={'modeCL'}
    color={theme.pointer}
    paused={false}
    onClick={changeToRandomTheme}
    />
    <style jsx global>
        {
            `
                              body {
                                background-color: ${theme.background};
                              }
                            `
        }
    </style>
</div>
    );
    const checkIfValid = (currentValue: string) => currentValue === exerciseNumber;
    const isValidEexerciseNumber = Boolean(valisExerciseNumbers.find(checkIfValid));

    if(isValidEexerciseNumber){
        if (isProdlikeEnv) {
            if(isValidTestPassword) {
                // DOBRE HASLO ALE PROD
                return exercise;
            } else {
                return <center>
                    <h1>tree-frog app</h1>
                    <h2>Have a better field of view than a tree frog...</h2>
                    <article className={"container"}>{WIPMessage}</article>
                    <style jsx global>
                        {
                            `
                              body {
                                background-color: ${theme.background};
                                display: flex;
                                margin: auto;
                                justify-content: center;
                              }
                              .container {
                                margin: 100px 15px;
                                max-width: 670px;

                                @media screen and (min-width: 600px) {
                                  padding: 0 30px;
                                }
                              }
                            `
                        }
                    </style>
                </center>
            }
        } else {
        return exercise;
        }
    } else {
        return <center>
            <h1>404 Error</h1>
            <h2>Sorry, we can’t seem to find what you’re looking for.</h2>
        </center>
    }
}
export default  App;