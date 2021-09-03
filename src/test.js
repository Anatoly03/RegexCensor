import Filter from '../lib/filter.js'
import assert from 'assert'

describe('Filter', function () {
    const filter = new Filter('*')

    it('should censor swear `ằss`', function () {
        assert.equal(filter.check('ằss'), true)
    })

    it('should censor swear `ƒÜčҚ`', function () {
        assert.equal(filter.check('ƒÜčҚ'), true)
    })
})