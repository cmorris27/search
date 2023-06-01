class ResultsPage {

    elements = {
        resultsList: () => cy.get('div.g', {timeout: 6000}),
    }

    verifyResultsContain(query) {
        this.elements.resultsList().should('have.length.at.least', 2);
        this.elements.resultsList().then(array => {
            return array.slice(0, 3);
        }).each(($el) => {
            cy.wrap($el).contains(query)
        })
    }

}

module.exports = new ResultsPage();
