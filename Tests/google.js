module.exports = {
    beforeEach: browser => {
        browser.url('https://www.google.com/')
    },
    after: browser => {
        browser.end()
    },
    'Your test here': browser => {
        browser
        .setValue('input[name="q"]', 'Flamenco')
        .verify.value('input[name="q"]', 'Flamenco')
        .click('input[id="gbqfbb"]')
        .pause(3000)
        .verify.visible('Flamenco') 
        .pause(30000)

    }
}