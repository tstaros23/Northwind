import { Before, Given, Then, When } from "@cucumber/cucumber";
import { AppPage } from "../app.po";
import { element, by } from "protractor";
import { expect } from "chai";
let page: AppPage;

Before(() => {
    page = new AppPage();
});
  
Given("I am on the counter-n page", {timeout: 2 * 5000}, async () => {
    await page.navigateToCounterN();
});

When("I fill out a field to input {int} and click {int} times", {timeout: 2 * 5000}, async (x: number) => {
    // Fill in the form field n times.
    const counter_increment = element(by.id('counter-n'));
    counter_increment.submit();
});

Then("the counter-n should show {string}", async (x: string) => {
    // Expect that we get the correct value showing
    expect(await element(by.id("counter-n")).getText()).to.equal(x);
});