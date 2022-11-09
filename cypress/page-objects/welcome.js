export class WelcomePage {
    checkMessage (Text) {
        cy.get('#flash').contains(Text)
    }
}