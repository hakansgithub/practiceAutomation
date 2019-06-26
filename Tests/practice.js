module.exports = {
    beforeEach: browser => {
        browser.url('https://www.amazon.com')
    },
    after: browser => {
        browser.end()
    },
    'MY TEST HERE': browser => {
        
    }
}