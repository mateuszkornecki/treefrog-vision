describe('exercises', () => {
    it('renders Pointer', () => {
        cy.visit(`http://localhost:3000/exercise/O1?password=dixJu7-fetfug-bacqyx`)
        cy.get('.Pointer')
    })

    it('sets animation parameters specified in the given URL', () => {
        cy.visit(`http://localhost:3000/exercise/O5?iterationTime=10s&delay=3s&password=dixJu7-fetfug-bacqyx`)
        cy.get('.Pointer')
            .should('have.css', 'animation-duration', '10s')
            .should('have.css', 'animation-delay', '3s')
    })



})