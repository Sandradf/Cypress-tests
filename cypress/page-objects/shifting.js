export class ShiftingPage {
    
    clickShiftingContent() {
        cy.get(':nth-child(39) > a').click()
    }

    clickMenu1() {
        cy.get('[href="/shifting_content/menu"]').click()
    }

    calculateItems() {
        cy.get('li').should('have.length',5)
    }
}