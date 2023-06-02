
class BeerResponse {
    veryStatusCode(code) {
        cy.get('@getBeerRequest').then((response) => {
            expect(response.status).to.eq(Number(code));
        });
    }

    verifyResponseObj(type) {
        cy.get('@getBeerRequest').then((response) => {
            expect(response.body[0].ingredients.malt[0].name).to.eq(type);
        })
    }

    verifyResponseObjValueAndUnit(value, unit) {
        cy.get('@getBeerRequest').then((response) => {
            expect(response.body[0].ingredients.malt[0].amount.value).to.eq(Number(value));
            expect(response.body[0].ingredients.malt[0].amount.unit).to.eq(unit);
        })
    }
}

module.exports = new BeerResponse();
