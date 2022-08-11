export class LandingPage {


    MenuItem = (itemName:string):string=>{return "//a[text()='"+itemName+"']"}
    
    VerifyTitleContains(expectedTitle: string) {
        cy.title()
        .should('contain',expectedTitle)
    }

    ClickMenuItem(menuItemText: string) {
       cy.xpath(this.MenuItem(menuItemText))
       .click();

       cy.wait(3000)
    }
}