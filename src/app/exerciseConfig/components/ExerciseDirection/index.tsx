import React, {ReactElement} from "react"
function ExerciseDirection(): ReactElement {
    return (
        <>
            <div className="exerciseDirection__container">
                <div className="exerciseDirection__item exerciseDirection__item--LT">LT</div>
                <div className="exerciseDirection__item exerciseDirection__item--RC">RC</div>
                <div className="exerciseDirection__item exerciseDirection__item--RT">RT</div>
                <div className="exerciseDirection__item exerciseDirection__item--RB">RB</div>
                <div className="exerciseDirection__item exerciseDirection__item--CB">CB</div>
                <div className="exerciseDirection__item exerciseDirection__item--CT">CT</div>
                <div className="exerciseDirection__item exerciseDirection__item--LC">LC</div>
                <div className="exerciseDirection__item exerciseDirection__item--LB">LB</div>
                <div className="exerciseDirection__item exerciseDirection__item--CC">CC</div>
            </div>
            <style jsx>
                {`
                    .exerciseDirection__container {
                        display: grid;
                        // TODO Check if height and width are set correctly
                        grid-template-columns: 6rem 6rem 6rem 6rem 6rem;
                        grid-template-rows: 4rem 4rem 4rem 4rem 4rem;
                        border: 0.13rem solid #E6E0E9;
                        border-radius: 0.5rem;
                    }
                    
                    .exerciseDirection__item {
                        color: hotpink;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .exerciseDirection__item--LT {
                        grid-area: 1 / 1 / 2 / 2;
                    }
                    .exerciseDirection__item--RC {
                        grid-area: 3 / 5 / 4 / 6; 
                    }
                    .exerciseDirection__item--__CC {
                        grid-area: 3 / 3 / 4 / 4; 
                    }
                    .exerciseDirection__item--RT {
                        grid-area: 1 / 5 / 2 / 6; 
                    }
                    .exerciseDirection__item--RB {
                        grid-area: 5 / 5 / 6 / 6; 
                    }
                    .exerciseDirection__item--CB {
                        grid-area: 5 / 3 / 6 / 4; 
                    }
                    .exerciseDirection__item--CT {
                        grid-area: 1 / 3 / 2 / 4; 
                    }
                    .exerciseDirection__item--LC {
                        grid-area: 3 / 1 / 4 / 2; 
                    }
                    .exerciseDirection__item--LB {
                        grid-area: 5 / 1 / 6 / 2; 
                    }
                    .exerciseDirection__item--CC {
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