import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import searchPage from "../../pages/SearchPage";
import resultsPage from "../../pages/ResultsPage";

Given('I visit Google', () => {
    cy.visit(Cypress.env('baseUrl'));
    searchPage.acceptCookie();
});

When('I search for {string}', (animal) => {
    searchPage.performSearch(animal)
});

Then('the results should contain the word {string}', (animal) => {
    resultsPage.verifyResultsContain(animal)
});
