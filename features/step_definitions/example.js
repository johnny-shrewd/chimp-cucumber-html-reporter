'use strict';

module.exports = function () {

  this.Given(/^I navigate to google$/, function () {
    browser.url("https://google.com/");
  });

  this.Then(/^I should be able to see the google logo$/, function () {
    browser.waitUntil(function () {
      return browser.isVisible("#hplogo");
    }, 5000, 'expected see the google logo');
  });

};
