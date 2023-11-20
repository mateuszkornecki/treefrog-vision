describe('exercises', () => {
    it('renders Pointer', () => {
        cy.visit(`http://localhost:3000/exercise/O1`)
        cy.get('.Pointer')
            .should('have.css', 'animation-duration', '30s')
            .should('have.css', 'animation-delay', '5s')
    })

    it('sets animation parameters specified in the given URL', () => {
        cy.visit(`http://localhost:3000/exercise/O5?iterationTime=10s&delay=3s`)
        cy.get('.Pointer')
            .should('have.css', 'animation-duration', '10s')
            .should('have.css', 'animation-delay', '3s')
    })



})