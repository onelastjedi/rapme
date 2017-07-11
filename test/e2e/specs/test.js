// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function test(browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.home-page')
      .assert.elementPresent('h1', 'Home')

      .url(`${devServer}/#/login`)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.login-page')
      .assert.elementPresent('h1', 'Login')

      .end();

  },
};