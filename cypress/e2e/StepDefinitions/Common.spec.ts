import { FormPage } from './../Page-objects/FormPage';
import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import { DashboardPage } from '../Page-objects/DashboardPage';
import { LandingPage } from "../Page-objects/LandingPage";
import { LoginPage } from '../Page-objects/LoginPage';

let landingPage:LandingPage = new LandingPage();
let loginPage:LoginPage = new LoginPage();
let dashboardPage:DashboardPage = new DashboardPage();
let formPage:FormPage = new FormPage();

Given("the user is on the homepage",()=>{
    cy.visit("https://ultimateqa.com/automation/")
    cy.viewport(1920,1080)
});

Then("the text {string} will be displayed in the title",(expectedTitle:string)=>{
    landingPage.VerifyTitleContains(expectedTitle)
})
Then("the user dashboard shall be displayed",()=>{
    dashboardPage.VerifyDashboardIsDisplayed()
})
Then("the user shall see the message {string} displayed on form {string}",(msg:string,formIndex:string)=>{
    formPage.VerifyFormSubmitted(+formIndex,msg)
})
And("the user shall see the message {string} displayed on form {string}",(msg:string,formIndex:string)=>{
    formPage.VerifyFormSubmitted(+formIndex,msg)
})
And("the user navigates to {string}",(menuItemText:string)=>{
    landingPage.ClickMenuItem(menuItemText)
    cy.end
})

When("the user logs in with the username {string} and password {string}",(username:string,password:string)=>{
    loginPage.Login(username,password)
})
When("the user enter form {string} data and submits the form",(formindex:string,datatable)=>{
    
    let nameData = ""
    let messageData = ""
    datatable.hashes().forEach((element) => {
        nameData = element.Name;
        messageData = element.Message;
    })
    formPage.EnterFormData((+formindex-1),nameData,messageData)
})


