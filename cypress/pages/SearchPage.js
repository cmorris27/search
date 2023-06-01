class SearchPage {

    elements = {
        acceptAllButton: () => cy.get("button[id='L2AGLb']"),
        searchForm: () => cy.get('[name="q"]'),
        submitButton: () => cy.get('[type="submit"][value="Google Search"]'),
    }

    acceptCookie() {
        this.elements.acceptAllButton().click();
    }

    performSearch(value) {
        this.elements.searchForm().type(value + '{esc}');
        this.elements.submitButton().eq(1).click({force:true});
    }
}

module.exports = new SearchPage();
