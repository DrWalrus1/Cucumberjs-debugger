const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given("My name is {string}", function (name) {
    this.name = name;
});

Given("My dogs name is {string}", function (name) {
    this.dogName = name;
});

Then("My name should be {string} and my dog's name is {string}", function (name, dogName) {
    assert.strictEqual(name, this.name);
    assert.strictEqual(dogName, this.dogName);
});