import React from 'react'
import Pointer from './'

describe('Pointer', () => {
  it('color property is changing Pointer color basing on it input.', () => {

    const pointerColor = "rgb(255, 105, 180)";
    const currentExercise = "O1";
    const iterationTime = "10s";
    const delayTime = "3s";
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Pointer  color={pointerColor} exercise={currentExercise} iterationTime={iterationTime} delay={delayTime}/>);

    cy.get('.Pointer')
        .should('have.css', 'background-color', pointerColor)



  })
})