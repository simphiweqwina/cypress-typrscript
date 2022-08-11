export class DashboardPage {

    LoggedInUser = ():string=>{return "//section[@class='header__user-menu']//a"}
    CoursesList = ():string=>{return "//input[@placeholder='Email']"} 

    VerifyDashboardIsDisplayed() {
        //check that username is visible
        cy.xpath(this.LoggedInUser())
        .invoke('text')
        .should('not.be.empty')

        //check that at least 1 course is returned
        cy.xpath(this.CoursesList())
        .should('have.length.above',0)
    }
}