import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import sslCertificate = require('get-ssl-certificate');

let cert:any;
Given("the user retrives the SSL certificate from {string}",(url:string)=>{
    sslCertificate.get("ultimateqa.com").then((certificate) =>{
        cert = certificate;
        expect(cert).to.not.be.empty
    });

});

Then("the certificate expiry date should be available",()=>{
    sslCertificate.get("ultimateqa.com").then((certificate) =>{
        cert = certificate;
        expect(cert.valid_to).to.not.be.null
    });
    
})
