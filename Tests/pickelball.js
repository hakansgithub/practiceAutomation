module.exports = {
    beforeEach: browser => {
        browser.url('https://www.livepickleball.com/')
    },
    after: browser => {
        browser.end()
    },
    'Login': browser => {
        browser
            .useXpath()
            .waitForElementPresent('//a[@href="#/userDashboard"]')
            .click('//a[@href="#/userDashboard"]')
            .waitForElementPresent('//input[@placeholder="email"]')
            .setValue('//input[@placeholder="email"]', '')
            // .setValue('$x('//a[@href="#/userDashboard"]')', ['San Diego', browser.Keys.ENTER])
            // .waitForElementPresent('@resultcity')
            // .expect.element('@resultCity').text.to.equal('San Diego')
    },
}