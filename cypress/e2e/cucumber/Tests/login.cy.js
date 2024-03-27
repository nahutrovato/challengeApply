import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"

Given("web", () => {
    cy.visit('https://automationexercise.com/');
});

When('Test when', () => {
    cy.log('Estoy en el when')
});

Then('Test then', () => {
    cy.log('Estoy en el then')
});