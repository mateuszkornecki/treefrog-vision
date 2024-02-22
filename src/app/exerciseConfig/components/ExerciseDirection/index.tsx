import React, {ReactElement} from "react"
function ExerciseDirection(): ReactElement {
    return (
        <>
            <div className="exerciseDirection__container">
                <div className="exerciseDirection__LTItem">LT</div>
                <div className="exerciseDirection__RCItem">RC</div>
                <div className="exerciseDirection__RTItem">RT</div>
                <div className="exerciseDirection__RBItem">RB</div>
                <div className="exerciseDirection__CBItem">CB</div>
                <div className="exerciseDirection__CTItem">CT</div>
                <div className="exerciseDirection__LCItem">LC</div>
                <div className="exerciseDirection__LBItem">LB</div>
                <div className="exerciseDirection__CCItem">CC</div>
            </div>
            <style jsx>
                {`
                    .exerciseDirection__container {
                        display: grid;
                        // TODO Check if height and width are set correctly
                        grid-template-columns: 6rem 6rem 6rem 6rem 6rem;
                        grid-template-rows: 4rem 4rem 4rem 4rem 4rem;
                        // TODO: convert to rem
                        border: 2px solid #E6E0E9;
                        border-radius: 0.5rem;
                    }

                    .exerciseDirection__LTItem {
                        grid-area: 1 / 1 / 2 / 2;
                    }
                    .exerciseDirection__RCItem {
                        grid-area: 3 / 5 / 4 / 6; 
                    }
                    .exerciseDirection__CCItem {
                        grid-area: 3 / 3 / 4 / 4; 
                    }
                    .exerciseDirection__RTItem {
                        grid-area: 1 / 5 / 2 / 6; 
                    }
                    .exerciseDirection__RBItem {
                        grid-area: 5 / 5 / 6 / 6; 
                    }
                    .exerciseDirection__CBItem {
                        grid-area: 5 / 3 / 6 / 4; 
                    }
                    .exerciseDirection__CTItem {
                        grid-area: 1 / 3 / 2 / 4; 
                    }
                    .exerciseDirection__LCItem {
                        grid-area: 3 / 1 / 4 / 2; 
                    }
                    .exerciseDirection__LBItem {
                        grid-area: 5 / 1 / 6 / 2; 
                    }
                    .exerciseDirection__CCItem {
                        grid-area: 3 / 3 / 4 / 4; 
                    }
                    
               // TODO Delete the presentation code after the component will be ready
                    
                    // Presentation only!
//                    .exerciseDirection__container * {
//                        //border: 1px solid red;
//                    }
                `}
            </style>
        </>
    )
}

export default ExerciseDirection