/*
 * Format for Selenium WebDriver Backed .NET (C#) client (NUnit)
 */

load('chrome://nodejs-formatters/content/formats/nodejs-base.js');
load('chrome://nodejs-formatters/content/formats/nodejs-webdriver-base.js');

this.name = "nodejs-mocha";

function testMethodName(testName) {
  return "The" + capitalize(testName) + "Test";
}

NotEquals.prototype.assert = function() {
  return "Assert.AreNotEqual(" + this.e1.toString() + ", " + this.e2.toString() + ");";
};

function assertTrue(expression) {
  return "Assert.IsTrue(" + expression.toString() + ");";
}

function assertFalse(expression) {
  return "Assert.IsFalse(" + expression.toString() + ");";
}

options.header =
  'var\n' +
    '  webdriver = require(\'selenium-webdriver\');\n' +
    '\n' +
    '"use strict";\n' +
    'describe("Selenium Test", function () {\n' +
    '  var driver;\n' +
    '\n' +
    '  before(function (done) {\n' +
    '    driver = new webdriver.Builder().\n' +
    '      usingServer(\'http://127.0.0.1:4444/wd/hub\').\n' +
    '      withCapabilities(webdriver.Capabilities.chrome()).\n' +
    '      build();\n' +
    '\n' +
    '    done();\n' +
    '  });\n' +
    '\n' +
    '  it("should perform a Selenium test",  function (done) {\n' +
    '    this.timeout(5000);\n\n';

options.footer =
  '  });\n' +
    '\n' +
    '\n' +
    '  after(function (done) {\n' +
    '    driver.quit();\n' +
    '    driver.wait(function () {\n' +
    '      done();\n' +
    '    }, 5000);\n' +
    '  });\n' +
    '});\n';