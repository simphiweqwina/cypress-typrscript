Feature: SSL Scenarios

    This file contains tests gor SSL

Scenario: As a UQA user I want to validate the SSL certificate an expiry date.
    Given the user retrives the SSL certificate from "https://ultimateqa.com/"
    Then the certificate expiry date should be available