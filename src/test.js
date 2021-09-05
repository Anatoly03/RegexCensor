import Filter from '../lib/filter.js'
import { extend_lat, lat } from '../config/latinize-extend.js'
import assert from 'assert'

extend_lat()

describe('Latinize (Extension)', function () {
    const filter = new Filter('*')

    it('should latinze `ằss`', function () {
        assert.equal(lat('ằss'), 'ass')
    })

    it('should latinze `ƒÜčҚ`', function () {
        assert.equal(lat('ƒÜčҚ'), 'fUcK')
    })

    it('should latinze `ℂⓤ𝖓T`', function () {
        assert.equal(lat('ℂⓤ𝖓T'), 'CunT')
    })
})

describe('Filter (Trigger)', function () {
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

describe('Filter (Replace)', function () {
    const filter = new Filter('*')

    it('should replace `hello fuckers` with `hello ****ers`', function () {
        assert.equal(filter.replace('hello fuckers'), 'hello ****ers')
    })

    it('should replace `suck my cock` with `suck my ****`', function () {
        assert.equal(filter.replace('suck my cock'), 'suck my ****')
    })
})