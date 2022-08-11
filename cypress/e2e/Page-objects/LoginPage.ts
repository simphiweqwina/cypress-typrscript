export class LoginPage {
    UsernameInputField = ():string=>{return "//input[@placeholder='Email']"}
    PasswordInputField = ():string=>{return "//input[@placeholder='Password']"}
    LoginBtn = ():string=>{return "//input[@type='submit']"}


    
    Login(username: string, password: string) {
        cy.xpath(this.UsernameInputField())
        .type(username)

        cy.xpath(this.PasswordInputField())
        .type(password)

        cy.xpath(this.LoginBtn())
        .click();

    }
}