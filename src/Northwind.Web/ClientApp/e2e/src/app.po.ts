import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  navigateToCounter() {
    return browser.get('/counter');
  }

  navigateToCounterTwo() {
    return browser.get('/counter-two');
  }

  getMainHeading() {
    return element(by.css('app-root h1')).getText();
  }
}
