Feature: Happy Scenarios

    This file contains several tests that run using valid data-inputs + combination in order to validate Ultimate QA functionality as expected
    The assumption is that the user already has an account and is signed out.

Scenario: As an Ultimate QA user I want to navigate to the home page in order to see 'Ultimate QA' displayed in the title 
    Given the user is on the homepage
    Then the text "Ultimate QA" will be displayed in the title

# Scenario: As an Ultimate QA user I want to navigate to the home page in order to see 'Ultimate QA' displayed somewhere in the page header 
#     Given the user is on the homepage
#     Then the text "Ultimate QA" will be displayed at the top

Scenario Outline: As an Ultimate QA user I want to login with valid credentials and log out in order to see the homepage displayed 
    Given the user is on the homepage
    And the user navigates to "Login automation"
    When the user logs in with the username <Username> and password <Password>
    Then the user dashboard shall be displayed
    Examples:
        | Username       | Password     |
        | "VQA@test.com" | "VOSS1234"   |

Scenario: As an Ultimate QA user I want to fill out form with valid inputs in order to see the form successfully submitted
    Given the user is on the homepage
    And the user navigates to "Fill out forms"
    When the user enter form "1" data and submits the form
    | Name       | Message       |
    | simphiwe | Hello World |
    And the user enter form "2" data and submits the form
    | Name       | Message       |
    | simphiwe | Hello World |
    Then the user shall see the message "Thanks for contacting us" displayed on form "1"
    # And the user shall see the message "Thanks for contacting us" displayed on form "2"

# Scenario: As an Ultimate QA user I want to fill out form with valid inputs in order to see the form successfully submitted
#     Given the user is on the homepage
#     And the user navigates to "Fake Pricing Page" 
#     When the user selects the "basic" package
#     Then the user shall see purchase screen displayed   