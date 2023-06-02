const baseUrl = Cypress.env('apiBaseUrl');

class BeerRequests {
    getBeerById(id) {
        cy.request({
            url: baseUrl + `beers/${id}`,
            method: 'GET',
            failOnStatusCode: false,
        }).as('getBeerRequest')
    };

}

module.exports = new BeerRequests();
