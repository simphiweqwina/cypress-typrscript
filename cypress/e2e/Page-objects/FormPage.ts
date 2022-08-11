export class FormPage {
    TargetFormByIndex = (index:number):string=>{return "//div[@id='et_pb_contact_form_"+index+"']"}
    NameInputField = ():string=>{return "//input[@placeholder='Name']"}
    MessageInputField = ():string=>{return "//textarea[@placeholder='Message']"}
    SubmitBtn = ():string=>{return "//button[@type='submit']"}
    FormSubmitMessage = ():string=>{return "//div[@class='et-pb-contact-message']//p"}
    CaptaSum = ():string=>{return "//span[@class='et_pb_contact_captcha_question']"}
    CaptaInputField = ():string=>{return "//span[@class='et_pb_contact_captcha_question']/../../..//input[@name='et_pb_contact_captcha_1']"}


    EnterFormData(formindex: number, nameData: string, messageData: string) {
        cy.xpath(this.TargetFormByIndex(formindex)+this.NameInputField())
        .type(nameData);

        cy.xpath(this.TargetFormByIndex(formindex)+this.MessageInputField())
        .type(messageData);

        if(formindex==1)
        {
            let num1:number;
            let num2:number;
            let sum :number;
            cy.xpath(this.CaptaSum())
            .invoke('text')
            .then((txt)=>{
                num1 = +txt.match(/\d+/)[0];
                num2 = +txt.match(/\d+$/)[0]
                sum = num1+num2;

                cy.xpath(this.CaptaInputField())
                .type(sum+"")
            })
        }

        cy.xpath(this.TargetFormByIndex(formindex)+this.SubmitBtn())
        .click();
        cy.wait(20000)

    }

    VerifyFormSubmitted(formindex: number, msg: string) {
        cy.xpath(this.TargetFormByIndex(formindex)+this.FormSubmitMessage())
        .invoke('text')
        .should('equal',msg)
        cy.end()
    }

}