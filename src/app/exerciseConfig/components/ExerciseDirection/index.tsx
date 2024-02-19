import React, {ReactElement} from "react"
function ExerciseDirection(): ReactElement {
    return (
        <>
            <div className="exerciseTheme__container">
                <div className="exerciseTheme__LTItem">LT</div>
                <div className="exerciseTheme__RCItem">RC</div>
                <div className="exerciseTheme__RTItem">RT</div>
                <div className="exerciseTheme__RBItem">RB</div>
                <div className="exerciseTheme__CBItem">CB</div>
                <div className="exerciseTheme__CTItem">CT</div>
                <div className="exerciseTheme__LCItem">LC</div>
                <div className="exerciseTheme__LBItem">LB</div>
                <div className="exerciseTheme__CCItem">CC</div>
            </div>
            <style jsx>
                {`
                    .exerciseTheme__container {  display: grid;
                        grid-template-columns: 4em 4em 4em 4em 4em;
                        grid-template-rows: 4em 4em 4em 4em 4em;
                        grid-auto-columns: 1fr;
                        gap: 0 0;
                        grid-auto-flow: row;
                    }

                    .exerciseTheme__LTItem {  display: grid;
                        grid-template-columns: 1fr 1fr 1fr;
                        grid-template-rows: 1fr 1fr 1fr;
                        gap: 0 0;
                        grid-auto-flow: row;
                        grid-template-areas:
                                ". . ."
                                ". . ."
                                ". . .";
                        grid-area: 1 / 1 / 2 / 2;
                    }

                    .exerciseTheme__RCItem { grid-area: 3 / 5 / 4 / 6; }

                    .exerciseTheme__CCItem { grid-area: 3 / 3 / 4 / 4; }

                    .exerciseTheme__RTItem { grid-area: 1 / 5 / 2 / 6; }

                    .exerciseTheme__RBItem { grid-area: 5 / 5 / 6 / 6; }

                    .exerciseTheme__CBItem { grid-area: 5 / 3 / 6 / 4; }
                    
                    .exerciseTheme__CTItem { grid-area: 1 / 3 / 2 / 4; }

                    .exerciseTheme__LCItem { grid-area: 3 / 1 / 4 / 2; }

                    .exerciseTheme__LBItem { grid-area: 5 / 1 / 6 / 2; }

                    .exerciseTheme__CCItem { grid-area: 3 / 3 / 4 / 4; }


                    html, body , .exerciseTheme__container {
                        height: 100%;
                        margin: 0;
                    }

                    /* For presentation only, no need to copy the code below */

                    .exerciseTheme__container * {
                        border: 1px solid red;
                        position: relative;
                    }

                    .exerciseTheme__container *:after {
                        /* content:attr(class); */
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        display: grid;
                        align-items: center;
                        justify-content: center;
                    }
                `}
            </style>
        </>
    )
}

export default ExerciseDirection