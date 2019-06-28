var yoodlizePage = {}
module.exports = {
    beforeEach: browser => {
        yoodlizePage = browser.page.yoodlize()
        yoodlizePage.navigate()
    },
    'SEE ALL LINKS': browser => {
        yoodlizePage
            .waitForElementPresent('@tools')
            .click('@tools')
            .assert.containsText('@category', 'Tools')
            .api.back()
        yoodlizePage
            .api.pause(3000)
        yoodlizePage
            .waitForElementPresent('@gear')
            .click('@gear')
            .assert.containsText('@category', 'Gear')
            .api.back()
        yoodlizePage
            .api.pause(3000)
        yoodlizePage
            .waitForElementPresent('@electronics')
            .click('@electronics')
            .assert.containsText('@category', 'Electronics')
            .api.back()
        yoodlizePage
            .api.pause(3000)
        yoodlizePage
            .waitForElementPresent('@wedding')
            .click('@wedding')
            .assert.containsText('@category', 'Wedding')
            .api.back()
        yoodlizePage
            .api.pause(3000)
        yoodlizePage
            .waitForElementPresent('@recreational')
            .click('@recreational')
            .assert.containsText('@category', 'Recreational')
            .api.back()
        yoodlizePage
            .api.pause(3000)
        yoodlizePage
            .waitForElementPresent('@clothing')
            .click('@clothing')
            .assert.containsText('@category', 'Clothing')
            .api.back()
        yoodlizePage
            .api.pause(3000)
        yoodlizePage
            .waitForElementPresent('@kitchen')
            .click('@kitchen')
            .assert.containsText('@category', 'Kitchen')
            .api.back()
        yoodlizePage
            .api.pause(3000)
        yoodlizePage
            .waitForElementPresent('@games')
            .click('@games')
            .assert.containsText('@category', 'Games')
            .api.back()
        yoodlizePage
            .api.pause(3000)
        yoodlizePage
            .waitForElementPresent('@lawn')
            .click('@lawn')
            .assert.containsText('@category', 'Lawn')
            .api.back()
        yoodlizePage
            .api.pause(3000)
        yoodlizePage
            .waitForElementPresent('@sporting')
            .click('@sporting')
            .assert.containsText('@category', 'Sporting')
            .api.back()
        yoodlizePage
            .api.pause(3000)
        yoodlizePage
            .waitForElementPresent('@video')
            .click('@video')
            .assert.containsText('@category', 'Video')
            .api.back()
        yoodlizePage
            .api.pause(3000)
        yoodlizePage
            .waitForElementPresent('@venues')
            .click('@venues')
            .assert.containsText('@category', 'Venues')
            .api.back()
        yoodlizePage
            .api.pause(3000)
        yoodlizePage
            .waitForElementPresent('@experts', 10000)
            .click('@experts')
            .assert.containsText('@category', 'Experts')
            .api.back()
        yoodlizePage
            .api.pause(3000)
        yoodlizePage
            .waitForElementPresent('@experiences')
            .click('@experiences')
            .assert.containsText('@category', 'Experiences')
            .api.back()
        yoodlizePage
            .api.pause(3000)
        yoodlizePage
            .waitForElementPresent('@misc')
            .click('@misc')
            .assert.containsText('@category', 'Misc')
            .api.back()
    },

    'Browse Categories Links': browser => {
        yoodlizePage
            .waitForElementPresent('@browseTools')
            .click('@browseTools')
            .assert.containsText('@category', 'Tools')
            .api.back()
        yoodlizePage
            .api.pause(3000)
        yoodlizePage
            .waitForElementPresent('@browseGear')
            .click('@browseGear')
            .assert.containsText('@category', 'Gear')
            .api.back()
        yoodlizePage
            .api.pause(3000)
        yoodlizePage
            .waitForElementPresent('@browseElectronics')
            .click('@browseElectronics')
            .assert.containsText('@category', 'Electronics')
            .api.back()
        yoodlizePage
            .api.pause(3000)
        yoodlizePage
            .waitForElementPresent('@browseWedding')
            .click('@browseWedding')
            .assert.containsText('@category', 'Wedding')
            .api.back()
        yoodlizePage
            .api.pause(3000)
        yoodlizePage
            .waitForElementPresent('@browseRecreational')
            .click('@browseRecreational')
            .assert.containsText('@category', 'Recreational')
            .api.back()
        yoodlizePage
            .api.pause(3000)
        yoodlizePage
            .waitForElementPresent('@browseClothing')
            .click('@browseClothing')
            .assert.containsText('@category', 'Clothing')
            .api.back()
        yoodlizePage
            .api.pause(3000)
        yoodlizePage
            .waitForElementPresent('@browseKitchen')
            .click('@browseKitchen')
            .assert.containsText('@category', 'Kitchen')
            .api.back()
        yoodlizePage
            .api.pause(3000)
        yoodlizePage
            .waitForElementPresent('@browseGames')
            .click('@browseGames')
            .assert.containsText('@category', 'Games')
            .api.back()
        yoodlizePage
            .api.pause(3000)
        yoodlizePage
            .waitForElementPresent('@browseLawn')
            .click('@browseLawn')
            .assert.containsText('@category', 'Lawn')
            .api.back()
        yoodlizePage
            .api.pause(3000)
        yoodlizePage
            .waitForElementPresent('@browseSporting')
            .click('@browseSporting')
            .assert.containsText('@category', 'Sporting')
            .api.back()
        yoodlizePage
            .api.pause(3000)
        yoodlizePage
            .waitForElementPresent('@browseVideo')
            .click('@browseVideo')
            .assert.containsText('@category', 'DVDs')
            .api.back()
        yoodlizePage
            .api.pause(3000)
        yoodlizePage
            .waitForElementPresent('@browseVenues')
            .click('@browseVenues')
            .assert.containsText('@category', 'Venues')
            .api.back()
        yoodlizePage
            .api.pause(3000)
        yoodlizePage
            .waitForElementPresent('@browseExperts')
            .click('@browseExperts')
            .assert.containsText('@category', 'Experts')
            .api.back()
        yoodlizePage
            .api.pause(3000)
        yoodlizePage
            .waitForElementPresent('@browseExperiences')
            .click('@browseExperiences')
            .assert.containsText('@category', 'Experiences')
            .api.back()
        yoodlizePage
            .api.pause(3000)
        yoodlizePage
            .waitForElementPresent('@browseMusic')
            .click('@browseMusic')
            .assert.containsText('@category', 'Music')
            .api.back()
        yoodlizePage
            .api.pause(3000)
        yoodlizePage
            .waitForElementPresent('@browseMisc')
            .click('@browseMisc')
            .assert.containsText('@category', 'Misc')
            .api.back()
        yoodlizePage
            .api.pause(3000)

    }
}