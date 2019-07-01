var homePage = {}
module.exports = {
    beforeEach: browser => {
        homePage = browser.page.homePage()
        homePage.navigate()
    }
}