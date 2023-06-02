import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import beerRequests from "../../integration/api_test/requests/beerRequests";
import beerResponse from "../../integration/api_test/response/beerResponse";


Given('I call the punk api with beer id {string}', (id) => {
    beerRequests.getBeerById(id)
});

When('I expect a {string} status response', (status_code) => {
    beerResponse.veryStatusCode(status_code)
});

Then('The malt is {string}', (type) => {
    beerResponse.verifyResponseObj(type)
});

Then('The malt value is {string} and the unit is {string}', (value, unit) => {
    beerResponse.verifyResponseObjValueAndUnit(value, unit)
});
