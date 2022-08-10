// Import the cucumber operators we need
import { Before, Given, Then, When } from "@cucumber/cucumber";
import { AppPage } from "../app.po";
import { element, by } from "protractor";
import { expect } from "chai";
let page: AppPage;

Before(() => {
  page = new AppPage();
});

Given("I am on the home page", {timeout: 2 * 5000}, async () => {
  await page.navigateTo();
});

Then("The heading should show {string}", {timeout: 2 * 5000}, async (x: string) => {
  // Expect that we get the correct value showing
  expect(await page.getMainHeading()).to.equal(x);
});