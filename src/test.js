import Filter from '../lib/filter.js'
import latinize from 'latinize';
import assert from 'assert'

describe('Latinize (Extension)', function () {
    const filter = new Filter('*')

    it('should latinze `ằss`', function () {
        assert.equal(latinize('ằss'), 'ass')
    })

    it('should latinze `ƒÜčҚ`', function () {
        assert.equal(latinize('ƒÜčҚ'), 'fUcK')
    })

    it('should latinze `ℂⓤ𝖓T`', function () {
        assert.equal(latinize('ℂⓤ𝖓T'), 'CunT')
    })
})

describe('Filter', function () {
    const filter = new Filter('*')

    it('should be triggered by `ass`', function () {
        assert.equal(filter.check('ass'), true)
    })

    it('should be triggered by `fuck`', function () {
        assert.equal(filter.check('fuck'), true)
    })

    it('should be triggered by `cunt`', function () {
        assert.equal(filter.check('cunt'), true)
    })

    it('should be not triggered by `Hello, World!`', function () {
        assert.equal(filter.check('Hello, World!'), false)
    })

    it('should be not triggered by `Nigeria`', function () {
        assert.equal(filter.check('Nigeria'), false)
    })
})