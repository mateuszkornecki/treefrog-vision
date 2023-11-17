describe('exercises', () => {
    it('renders Pointer', () => {
        cy.visit(`http://localhost:3000/exercise/O1`)
        cy.get('.Pointer')
            .should('have.css', 'animation-duration', '30s')
            .should('have.css', 'animation-delay', '5s')
            .should('have.css', 'animation-name', 'centerToLeft')
    })

    it('Exercise O2 has a correct initial directionMode set', () => {
        cy.visit(`http://localhost:3000/exercise/O2`)
        cy.get('.Pointer')
            .should('have.css', 'animation-name', 'centerToLeft')
    })

    it('Exercise O3 has a correct initial directionMode set', () => {
        cy.visit(`http://localhost:3000/exercise/O3`)
        cy.get('.Pointer')
            .should('have.css', 'animation-name', 'centerToLeft')
    })

    it('Exercise O4 has a correct initial directionMode set', () => {
        cy.visit(`http://localhost:3000/exercise/O4`)
        cy.get('.Pointer')
            .should('have.css', 'animation-name', 'centerToRight')
    })

    it('Exercise O5 has a correct initial directionMode set', () => {
        cy.visit(`http://localhost:3000/exercise/O5`)
        cy.get('.Pointer')
            .should('have.css', 'animation-name', 'centerToTop')
    })

    it('shows 404 page when exercise number given in a searchParams is incorrect', () => {
        cy.visit(`http://localhost:3000/exercise/6666`)
        cy.get('h2')
            .should('have.text', 'Not Found')
    })

    it('sets animation parameters specified in the given URL', () => {
        cy.visit(`http://localhost:3000/exercise/O5?iterationTime=10s&delay=3s`)
        cy.get('.Pointer')
            .should('have.css', 'animation-duration', '10s')
            .should('have.css', 'animation-delay', '3s')
    })



})