import Filter from './index.js'
import { lat } from './config/latinize-extend.js'
import assert from 'assert'

const filter = Filter('*')

describe('Latinize (Extension)', function () {
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

describe('Filter (Case Insensitive)', function () {
    it('should be triggered by `poRnStAr`', function () {
        assert.equal(filter.check('poRnStAr'), true)
    })

    it('should be triggered by `fUcKyOu`', function () {
        assert.equal(filter.check('fuck'), true)
    })

    it('should be triggered by `CUM`', function () {
        assert.equal(filter.check('cunt'), true)
    })
})

describe('Filter (Trigger)', function () {
    it('should be triggered by `ass`', function () {
        assert.equal(filter.check('ass'), true)
    })

    it('should be triggered by `fuck`', function () {
        assert.equal(filter.check('fuck'), true)
    })

    it('should be triggered by `cunt`', function () {
        assert.equal(filter.check('cunt'), true)
    })

    it('should be triggered by `anal`', function () {
        assert.equal(filter.check('anal'), true)
    })

    it('should be not triggered by `Hello, World!`', function () {
        assert.equal(filter.check('Hello, World!'), false)
    })

    it('should be not triggered by `Nigeria`', function () {
        assert.equal(filter.check('Nigeria'), false)
    })

    it('should be not triggered by `analysis`', function () {
        assert.equal(filter.check('analysis'), false)
    })
})

describe('Filter (Find)', function () {
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
    it('should replace `hello fuckers` with `hello ****ers`', function () {
        assert.equal(filter.replace('hello fuckers'), 'hello *******')
    })

    it('should replace `suck my cock` with `suck my ****`', function () {
        assert.equal(filter.replace('suck my cock'), 'suck my ****')
    })
})

describe('Filter (Arrays)', function () {
    it('should check an array for profanity', function () {
        assert.equal(filter.check(['hello', ['fuck']]), true)
    })

    it('should find profanity in an array', function () {
        assert.deepEqual(filter.find(['hello', ['fuck']]), ['fuck'])
    })
})