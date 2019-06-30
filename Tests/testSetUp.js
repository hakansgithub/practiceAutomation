module.exports = {
    beforeEach: browser => {
        browser.url('someplace.com')
    },
    after: browser => {
        browser.end()
    },
    'Test goes here': browser => {

    },
    'Test 2 goes here': browser => {

    }
}