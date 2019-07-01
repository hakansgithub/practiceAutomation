module.exports = {
    beforeEach: browser => {
        browser.url('https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html')
    },
    after: browser => {
        browser.end()
    },
    'Submit a valid query': browser => {
        browser
            .waitForElementPresent('#versionNumber', 5000)
            .setValue('input[name="hdrInput"]', '1234567890')
            .setValue('input[name="mkeInput"]', 'ABC')
            .setValue('input[name="oriInput"]', 'OAI123456')
            .setValue('input[name="namInput"]', 'Harry Dresden')
            .setValue('input[name="sexInput"]', 'M')
            .setValue('input[name="racInput"]', 'W')
            .setValue('input[name="hgtInput"]', '607')
            .setValue('input[name="haiInput"]', 'Brown')
            .setValue('input[name="offInput"]', 'Arson')
            .setValue('input[name="dowInput"]', '10312010')
            .expect.element('span[name="queryBody"]').text.to.equal("").before(2000)
    }
}
