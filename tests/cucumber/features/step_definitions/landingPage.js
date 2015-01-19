(function () {

  'use strict';

  var assert = require('assert');

  module.exports = function () {

    var helper = this;

    this.Given(/^The setting with key "([^"]*)" and value "([^"]*)" has been set$/, function (key, value, callback) {

      function _getPublicMeteorSettingForKey (key) {
        function getValueByKey (o, k) { return o[k] }
        return key.split(".").reduce(getValueByKey, Meteor.settings);
      }

      try {
        var publicMeteorSettingForKey = _getPublicMeteorSettingForKey(key);
        assert.equal(publicMeteorSettingForKey, value);
        callback();
      } catch (e) {
        callback.fail(e.message);
      }

    });

    this.Given(/^I am a new visitor$/, function (callback) {
      callback();
    });

    this.When(/^I navigate to the landing page$/, function (callback) {
      helper.world.browser.
        url(helper.world.mirrorUrl).
        call(callback);
    });

    this.Then(/^I see the heading "([^"]*)"$/, function (expectedHeading, callback) {
      helper.world.browser.
        getText('h1', function (error, actualHeading) {
          assert.equal(actualHeading, expectedHeading);
          callback();
        });
    });

    this.Given(/^I have entered chapter preview descriptions$/, function (callback) {
      // Write code here that turns the phrase above into concrete actions
      callback();
    });

    this.Then(/^I see the chapters descriptions in the preview section$/, function (callback) {
      helper.world.browser.
        getText('p', function(error, actualDescriptions) {
          if (error) { callback.fail(error.message);}
          assert.equal(actualDescriptions[0], "This chapter will cover item 1");
          callback();
        });
    });

    this.Then(/^the chapters are in order$/, function (callback) {
      helper.world.browser.
        getText('h2', function(error, actualHeadings) {
          if (error) { callback.fail(error.message);}
          assert.deepEqual(actualHeadings, ["Item 1", "Item 2"]);
          callback();
        });
    });
  };
})();
