describe('exercise O1', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/exercise/O1?iterationTime=10s&delay=3s')
    })

    it('have working searchParams', () => {
        cy.get('.Pointer')
            .should("exist")
            .should('have.css', 'animation-delay', "3s")
            .should('have.css', 'animation-duration', "10s")

    })
})