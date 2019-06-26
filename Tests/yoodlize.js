module.exports = {
    beforeEach: browser => {
        browser.url('https://alpha.yoodlize.com/')
    },
    after: browser => {
        browser.end()
    },
    'SEE ALL LINKS': browser => {
        browser
            .useXpath()
            .waitForElementPresent(('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[1]'))
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[1]')
            .assert.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Tools')
            .back()
            .pause(3000)
            .waitForElementPresent(('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[2]'))
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[2]')
            .assert.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Gear')
            .back()
            .pause(3000)
            .waitForElementPresent(('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[3]'))
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[3]')
            .assert.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Electronics')
            .back()
            .pause(3000)
            .waitForElementPresent(('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[4]'))
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[4]')
            .assert.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Wedding')
            .back()
            .pause(3000)
            .waitForElementPresent(('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[5]'))
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[5]')
            .assert.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Recreational')
            .back()
            .pause(3000)
            .waitForElementPresent(('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[6]'))
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[6]')
            .assert.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Clothing')
            .back()
            .pause(3000)
            .waitForElementPresent(('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[7]'))
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[7]')
            .assert.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Kitchen')
            .back()
            .pause(3000)
            .waitForElementPresent(('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[8]'))
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[8]')
            .assert.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Games')
            .back()
            .pause(3000)
            .waitForElementPresent(('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[9]'))
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[9]')
            .assert.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Lawn')
            .back()
            .pause(3000)
            .waitForElementPresent(('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[10]'))
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[10]')
            .assert.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Sporting')
            .back()
            .pause(3000)
            .waitForElementPresent(('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[11]'))
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[11]')
            .assert.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Video')
            .back()
            .pause(3000)
            .waitForElementPresent(('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[12]'))
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[12]')
            .assert.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Venues')
            .back()
            .pause(3000)
            .waitForElementPresent(('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[13]'))
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[13]')
            .assert.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Experts')
            .back()
            .pause(3000)
            .waitForElementPresent(('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[14]'))
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[14]')
            .assert.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Experiences')
            .back()
            .pause(3000)
            .waitForElementPresent(('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[15]'))
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[15]')
            .assert.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Misc')
            .back()
    },
    'Browse Categories Links': browser => {
        browser
            .useXpath()
            .waitForElementPresent(('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[1]'))
            .click(('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[1]'))
            .assert.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Tools')
            .back()
            .pause(3000)
            .waitForElementPresent(('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[2]'))
            .click(('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[2]'))
            .assert.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Gear')
            .back()
            .pause(3000)
            .waitForElementPresent(('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[3]'))
            .click(('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[3]'))
            .assert.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Electronics')
            .back()
            .pause(3000)
            .waitForElementPresent(('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[4]'))
            .click(('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[4]'))
            .assert.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Wedding')
            .back()
            .pause(3000)
            .waitForElementPresent(('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[5]'))
            .click(('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[5]'))
            .assert.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Recreational')
            .back()
            .pause(3000)
            .waitForElementPresent(('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[6]'))
            .click(('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[6]'))
            .assert.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Clothing')
            .back()
            .pause(3000)
            .waitForElementPresent(('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[7]'))
            .click(('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[7]'))
            .assert.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Kitchen')
            .back()
            .pause(3000)
            .waitForElementPresent(('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[8]'))
            .click(('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[8]'))
            .assert.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Games')
            .back()
            .pause(3000)
            .waitForElementPresent(('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[9]'))
            .click(('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[9]'))
            .assert.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Lawn')
            .back()
            .pause(3000)
            .waitForElementPresent(('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[10]'))
            .click(('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[10]'))
            .assert.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Sporting')
            .back()
            .pause(3000)
            .waitForElementPresent(('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[11]'))
            .click(('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[11]'))
            .assert.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'DVDs')
            .back()
            .pause(3000)
            .waitForElementPresent(('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[12]'))
            .click(('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[12]'))
            .assert.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Venues')
            .back()
            .pause(3000)
            .waitForElementPresent(('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[13]'))
            .click(('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[13]'))
            .assert.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Experts')
            .back()
            .pause(3000)
            .waitForElementPresent(('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[14]'))
            .click(('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[14]'))
            .assert.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Experiences')
            .back()
            .pause(3000)
            .waitForElementPresent(('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[15]'))
            .click(('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[15]'))
            .assert.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Music')
            .back()
            .pause(3000)
            .waitForElementPresent(('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[16]'))
            .click(('(//div[@class="sc-jqCOkK MvxJP sc-gqjmRU ksayja"])[16]'))
            .assert.containsText('//div[@class="sc-jKVCRD jSqgxr"]', 'Misc')
            .back()
            .pause(3000)
            
    }

}