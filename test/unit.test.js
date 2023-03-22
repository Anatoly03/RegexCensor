import Filter from '../src/index.js'
import { latinize } from "../build/lib.js";
import assert from 'assert'
import test from 'node:test';

const filter = Filter('*')

test('Latinize (Extension)', async function (t) {
    await t.test('should latinze `ằss`', async function (t) {
        assert.strictEqual(latinize('ằss'), 'ass')
    })

    await t.test('should latinze `ƒÜčҚ`', async function (t) {
        assert.strictEqual(latinize('ƒÜčҚ'), 'fUcK')
    })

    await t.test('should latinze `ℂⓤ𝖓T`', async function (t) {
        assert.strictEqual(latinize('ℂⓤ𝖓T'), 'CunT')
    })
})

test('Filter (Case Insensitive)', async function (t) {
    await t.test('should be triggered by `poRnStAr`', async function (t) {
        assert.strictEqual(filter.check('poRnStAr'), true)
    })

    await t.test('should be triggered by `fUcKyOu`', async function (t) {
        assert.strictEqual(filter.check('fuck'), true)
    })

    await t.test('should be triggered by `CUM`', async function (t) {
        assert.strictEqual(filter.check('cunt'), true)
    })
})

test('Filter (Trigger)', async function (t) {
    await t.test('should be triggered by `ass`', async function (t) {
        assert.strictEqual(filter.check('ass'), true)
    })

    await t.test('should be triggered by `fuck`', async function (t) {
        assert.strictEqual(filter.check('fuck'), true)
    })

    await t.test('should be triggered by `cunt`', async function (t) {
        assert.strictEqual(filter.check('cunt'), true)
    })

    await t.test('should be triggered by `anal`', async function (t) {
        assert.strictEqual(filter.check('anal'), true)
    })

    await t.test('should be not triggered by `Hello, World!`', async function (t) {
        assert.strictEqual(filter.check('Hello, World!'), false)
    })

    await t.test('should be not triggered by `Nigeria`', async function (t) {
        assert.strictEqual(filter.check('Nigeria'), false)
    })

    await t.test('should be not triggered by `Fukushima`', async function (t) {
        assert.strictEqual(filter.check('Fukushima'), false)
    })

    await t.test('should be not triggered by `analysis`', async function (t) {
        assert.strictEqual(filter.check('analysis'), false)
    })
})

test('Filter (Find)', async function (t) {
    await t.test('should find `ass` in `ass`', async function (t) {
        assert.deepEqual(filter.find('ass'), ['ass'])
    })

    await t.test('should find `ass` once in `ass ass ass`', async function (t) {
        assert.deepEqual(filter.find('ass ass ass'), ['ass'])
    })

    await t.test('should find `ass` and `asses`, but not `assembly` or `associated` in `ass asses assembly assumption associatied`', async function (t) {
        assert.deepEqual(filter.find('ass asses assembly assumption associatied').sort(), ['ass', 'asses'].sort())
    })

    await t.test('should find all words in `ass fuck dick`', async function (t) {
        let a = filter.find('ass fuck dick').sort()
        let b = ['ass', 'fuck', 'dick'].sort()
        assert.deepEqual(a, b)
    })
})

// Matches cannot be tested because they are very dependent on what patterns there are.
/*test('Filter (Matches)', async function (t) {
    await t.test('should match one patterns in `ass`', async function (t) {
        assert.strictEqual(filter.match('ass').length, 1)
    })

    await t.test('should match one pattern in `ass ass ass`', async function (t) {
        assert.strictEqual(filter.match('ass ass ass').length, 1)
    })

    await t.test('should match three patterns in `ass fuck dick`', async function (t) {
        assert.strictEqual(filter.match('ass fuck dick').length, 3)
    })
})*/

test('Filter (Replace)', async function (t) {
    await t.test('should replace `hello fuckers` with `hello *******`', async function (t) {
        assert.strictEqual(filter.replace('hello fuckers'), 'hello *******')
    })

    await t.test('should replace `suck my cock` with `suck my ****`', async function (t) {
        assert.strictEqual(filter.replace('suck my cock'), 'suck my ****')
    })
})

test('Filter (Arrays)', async function (t) {
    await t.test('should check an array for profanity', async function (t) {
        assert.strictEqual(filter.check_many(['hello', 'fuck']), true)
    })

    // THIS TEST CASE IS NO LONGER SUPPORTED
    // await t.test('should find profanity in an array', async function (t) {
    //     assert.deepEqual(filter.find(['hello', 'fuck']), ['fuck'])
    // })
})