/// <reference types="cypress" />
import {MainPage} from "../../page-objects/main"
import {LoginPage} from "../../page-objects/login"
import {WelcomePage} from "../../page-objects/welcome"

describe('TESTS DE LOGIN', () => {
  const mainPage = new MainPage()
  const loginPage = new LoginPage()
  const welcomePage = new WelcomePage()


  beforeEach( () => {
    mainPage.navigate()
    mainPage.clickLoginOption()
    
})

    it('A valid user can login', () =>{    
        loginPage.fillUser("tomsmith")
        loginPage.fillPass("SuperSecretPassword!")
        loginPage.clickButtonLogin()
        welcomePage.checkMessage("You logged into a secure area!")

})    
    it('An invalid password cannot login', () =>{
    
        loginPage.fillUser("tomsmith")
        cy.get('#password').type("error!")
        loginPage.clickButtonLogin()
        cy.get('#flash').contains("Your password is invalid!")
})
    it('An invalid user cannot login', () =>{
    
        cy.get('#username').type("error!")
        loginPage.fillPass("SuperSecretPassword!")
        loginPage.clickButtonLogin()
        cy.get('#flash').contains("Your username is invalid!")

})
    it('Empty user name and password fields cannot login', () =>{   
    
        cy.get('#username').should('be.empty')
        cy.get('#password').should('be.empty')
        loginPage.clickButtonLogin()
        cy.get('#flash').contains("Your username is invalid!")

})
})