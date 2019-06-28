var yoodlizePage = {}
module.exports = {
    beforeEach: browser => {
        yoodlizePage = browser.page.yoodlize()
        yoodlizePage.navigate()
    },
    'SEE ALL LINKS': browser => {
        yoodlizePage
            .useXpath()
            .waitForElementPresent('@tools')
            .click('@tools')
            .assert.containsText('@category', 'Tools')
            .back()
            .pause(3000)
            .waitForElementPresent('@gear')
            .click('@gear')
            .assert.containsText('@category', 'Gear')
            .back()
            .pause(3000)
            .waitForElementPresent('@electronics')
            .click('@electronics')
            .assert.containsText('@category', 'Electronics')
            .back()
            .pause(3000)
            .waitForElementPresent('@wedding')
            .click('@wedding')
            .assert.containsText('@category', 'Wedding')
            .back()
            .pause(3000)
            .waitForElementPresent('@recreational')
            .click('@recreational')
            .assert.containsText('@category', 'Recreational')
            .back()
            .pause(3000)
            .waitForElementPresent('@clothing')
            .click('@clothing')
            .assert.containsText('@category', 'Clothing')
            .back()
            .pause(3000)
            .waitForElementPresent('@kitchen')
            .click('@kitchen')
            .assert.containsText('@category', 'Kitchen')
            .back()
            .pause(3000)
            .waitForElementPresent('@games')
            .click('@games')
            .assert.containsText('@category', 'Games')
            .back()
            .pause(3000)
            .waitForElementPresent('@lawn')
            .click('@lawn')
            .assert.containsText('@category', 'Lawn')
            .back()
            .pause(3000)
            .waitForElementPresent('@sporting')
            .click('@sporting')
            .assert.containsText('@category', 'Sporting')
            .back()
            .pause(3000)
            .waitForElementPresent('@video')
            .click('@video')
            .assert.containsText('@category', 'Video')
            .back()
            .pause(3000)
            .waitForElementPresent('@venues')
            .click('@venues')
            .assert.containsText('@category', 'Venues')
            .back()
            .pause(3000)
            .waitForElementPresent('@experts')
            .click('(@experts')
            .assert.containsText('@category', 'Experts')
            .back()
            .pause(3000)
            .waitForElementPresent('@experiences')
            .click('@experiences')
            .assert.containsText('@category', 'Experiences')
            .back()
            .pause(3000)
            .waitForElementPresent('@misc')
            .click('@misc')
            .assert.containsText('@category', 'Misc')
            .back()
    },

    'Browse Categories Links': browser => {
        yoodlizePage
            
            .waitForElementPresent('@browseTools')
            .click('@browseTools')
            .assert.containsText('@category', 'Tools')
            .back()
            .pause(3000)
            .waitForElementPresent('@browseGear')
            .click('@browseGear')
            .assert.containsText('@category', 'Gear')
            .back()
            .pause(3000)
            .waitForElementPresent('@browseElectronics')
            .click('@browseElectronics')
            .assert.containsText('@category', 'Electronics')
            .back()
            .pause(3000)
            .waitForElementPresent('@browseWedding')
            .click('@browseWedding')
            .assert.containsText('@category', 'Wedding')
            .back()
            .pause(3000)
            .waitForElementPresent('@browseRecreational')
            .click('@browseRecreational')
            .assert.containsText('@category', 'Recreational')
            .back()
            .pause(3000)
            .waitForElementPresent('@browseClothing')
            .click('@browseClothing')
            .assert.containsText('@category', 'Clothing')
            .back()
            .pause(3000)
            .waitForElementPresent('@browseKitchen')
            .click('@browseKitchen')
            .assert.containsText('@category', 'Kitchen')
            .back()
            .pause(3000)
            .waitForElementPresent('@browseGames')
            .click('@browseGames')
            .assert.containsText('@category', 'Games')
            .back()
            .pause(3000)
            .waitForElementPresent('@browseLawn')
            .click('@browseLawn')
            .assert.containsText('@category', 'Lawn')
            .back()
            .pause(3000)
            .waitForElementPresent('@browseSporting')
            .click('@browseSporting')
            .assert.containsText('@category', 'Sporting')
            .back()
            .pause(3000)
            .waitForElementPresent('@browseVideo')
            .click('@browseVideo')
            .assert.containsText('@category', 'DVDs')
            .back()
            .pause(3000)
            .waitForElementPresent('@browseVenues')
            .click('@browseVenues')
            .assert.containsText('@category', 'Venues')
            .back()
            .pause(3000)
            .waitForElementPresent('@browseExperts')
            .click('@browseExperts')
            .assert.containsText('@category', 'Experts')
            .back()
            .pause(3000)
            .waitForElementPresent('@browseExperiences')
            .click('@browseExperiences')
            .assert.containsText('@category', 'Experiences')
            .back()
            .pause(3000)
            .waitForElementPresent('@browseMusic')
            .click('@browseMusic')
            .assert.containsText('@category', 'Music')
            .back()
            .pause(3000)
            .waitForElementPresent('@browseMisc')
            .click('@browseMisc')
            .assert.containsText('@category', 'Misc')
            .back()
            .pause(3000)         
    }
}