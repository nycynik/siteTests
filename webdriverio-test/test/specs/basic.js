const assert = require('assert')

describe('load the site', () => {
    it('should have the right title', () => {
        browser.url('https://amplify.com')
        const title = browser.getTitle()
        assert.include(title, 'Amplify')
    })
})
