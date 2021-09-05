import Filter from './index.js'
import { lat } from './config/latinize-extend.js'
import assert from 'assert'

describe('Latinize (Extension)', function () {
    const filter = Filter('*')

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
    const filter = Filter('*')

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

describe('Filter (Find)', function () {
    const filter = Filter('*')

    it('should find `ass` in `ass`', function () {
        assert.deepEqual(filter.find('ass'), ['ass'])
    })

    it('should find `ass` three times in `ass ass ass`', function () {
        assert.deepEqual(filter.find('ass ass ass'), ['ass', 'ass', 'ass'])
    })

    it('should find all words in `ass fuck dick`', function () {
        let a = filter.find('ass fuck dick').sort()
        let b = ['ass', 'fuck', 'dick'].sort()
        assert.deepEqual(a, b)
    })
})

describe('Filter (Matches)', function () {
    const filter = Filter('*')

    it('should match one patterns in `ass`', function () {
        assert.equal(filter.match('ass').length, 1)
    })

    it('should match one pattern in `ass ass ass`', function () {
        assert.equal(filter.match('ass ass ass').length, 1)
    })

    it('should match three patterns in `ass fuck dick`', function () {
        assert.equal(filter.match('ass fuck dick').length, 3)
    })
})

describe('Filter (Replace)', function () {
    const filter = new Filter('*')

    it('should replace `hello fuckers` with `hello ****ers`', function () {
        assert.equal(filter.replace('hello fuckers'), 'hello *******')
    })

    it('should replace `suck my cock` with `suck my ****`', function () {
        assert.equal(filter.replace('suck my cock'), 'suck my ****')
    })
})