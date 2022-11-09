/// <reference types="cypress" />
import {ShiftingPage} from "../../page-objects/Shifting"
import {MainPage} from "../../page-objects/main"


describe('TESTS DE LOGIN', () => {
    const mainPage = new MainPage()
    const shiftingPage = new ShiftingPage()


it('Shifting content', () =>{    
    mainPage.navigate()
    ShiftingPage.clickShiftingContent()
    ShiftingPage.clickMenu1()
    ShiftingPage.calculateItems()
})  
})  