import Filter from '../src/index.js'
import assert from 'assert'
import test from 'node:test';

const filter = Filter('*')

test('Latinize (Extension)', function () {
    it('should latinze `ằss`', function () {
        assert.strictEqual(lat('ằss'), 'ass')
    })

    it('should latinze `ƒÜčҚ`', function () {
        assert.strictEqual(lat('ƒÜčҚ'), 'fUcK')
    })

    it('should latinze `ℂⓤ𝖓T`', function () {
        assert.strictEqual(lat('ℂⓤ𝖓T'), 'CunT')
    })
})

test('Filter (Case Insensitive)', function () {
    it('should be triggered by `poRnStAr`', function () {
        assert.strictEqual(filter.check('poRnStAr'), true)
    })

    it('should be triggered by `fUcKyOu`', function () {
        assert.strictEqual(filter.check('fuck'), true)
    })

    it('should be triggered by `CUM`', function () {
        assert.strictEqual(filter.check('cunt'), true)
    })
})

test('Filter (Trigger)', function () {
    it('should be triggered by `ass`', function () {
        assert.strictEqual(filter.check('ass'), true)
    })

    it('should be triggered by `fuck`', function () {
        assert.strictEqual(filter.check('fuck'), true)
    })

    it('should be triggered by `cunt`', function () {
        assert.strictEqual(filter.check('cunt'), true)
    })

    it('should be triggered by `anal`', function () {
        assert.strictEqual(filter.check('anal'), true)
    })

    it('should be not triggered by `Hello, World!`', function () {
        assert.strictEqual(filter.check('Hello, World!'), false)
    })

    it('should be not triggered by `Nigeria`', function () {
        assert.strictEqual(filter.check('Nigeria'), false)
    })

    it('should be not triggered by `Fukushima`', function () {
        assert.strictEqual(filter.check('Fukushima'), false)
    })

    it('should be not triggered by `analysis`', function () {
        assert.strictEqual(filter.check('analysis'), false)
    })
})

test('Filter (Find)', function () {
    it('should find `ass` in `ass`', function () {
        assert.deepEqual(filter.find('ass'), ['ass'])
    })

    it('should find `ass` once in `ass ass ass`', function () {
        assert.deepEqual(filter.find('ass ass ass'), ['ass'])
    })

    it('should find `ass` and `asses`, but not `assembly` or `associated` in `ass asses assembly assumption associatied`', function () {
        assert.deepEqual(filter.find('ass asses assembly assumption associatied'), ['ass', 'asses'])
    })

    it('should find all words in `ass fuck dick`', function () {
        let a = filter.find('ass fuck dick').sort()
        let b = ['ass', 'fuck', 'dick'].sort()
        assert.deepEqual(a, b)
    })
})

// Matches cannot be tested because they are very dependent on what patterns there are.
/*test('Filter (Matches)', function () {
    it('should match one patterns in `ass`', function () {
        assert.strictEqual(filter.match('ass').length, 1)
    })

    it('should match one pattern in `ass ass ass`', function () {
        assert.strictEqual(filter.match('ass ass ass').length, 1)
    })

    it('should match three patterns in `ass fuck dick`', function () {
        assert.strictEqual(filter.match('ass fuck dick').length, 3)
    })
})*/

test('Filter (Replace)', function () {
    it('should replace `hello fuckers` with `hello *******`', function () {
        assert.strictEqual(filter.replace('hello fuckers'), 'hello *******')
    })

    it('should replace `suck my cock` with `suck my ****`', function () {
        assert.strictEqual(filter.replace('suck my cock'), 'suck my ****')
    })
})

test('Filter (Arrays)', function () {
    it('should check an array for profanity', function () {
        assert.strictEqual(filter.check(['hello', ['fuck']]), true)
    })

    it('should find profanity in an array', function () {
        assert.deepEqual(filter.find(['hello', ['fuck']]), ['fuck'])
    })
})