import Filter from '../src/index.js'
import { latinize } from "../build/lib.js";
import assert from 'assert'
import test from 'node:test';

const filter = Filter({
    words: ['foo', 'bar', 'bug']
})

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
    await t.test('should be triggered by `bAR`', async function (t) {
        assert.strictEqual(filter.check('bAR'), true)
    })

    await t.test('should be triggered by `FOO`', async function (t) {
        assert.strictEqual(filter.check('FOO'), true)
    })
})

test('Filter (Trigger)', async function (t) {
    await t.test('should be triggered by `foo`', async function (t) {
        assert.strictEqual(filter.check('foo'), true)
    })

    await t.test('should be triggered by `bug`', async function (t) {
        assert.strictEqual(filter.check('bug'), true)
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
    await t.test('should find `foo` in `foo`', async function (t) {
        assert.deepEqual(filter.find('foo'), ['foo'])
    })

    await t.test('should find `foo` once in `foo foo foo`', async function (t) {
        assert.deepEqual(filter.find('foo foo foo'), ['foo'])
    })

    await t.test('should find `foo` and `bar`, but not combinations', async function (t) {
        assert.deepEqual(filter.find('foo bar foobarbug bugfoo bugbar').sort(), ['foo', 'bar'].sort())
    })

    await t.test('should find all words in `foo bar bug`', async function (t) {
        let a = filter.find('foo bar bug').sort()
        let b = ['foo', 'bar', 'bug'].sort()
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
    await t.test('should replace `hello foo` with `hello ***`', async function (t) {
        assert.strictEqual(filter.replace('hello foo'), 'hello ***')
    })

    await t.test('should replace `fix my bug` with `fix my ***`', async function (t) {
        assert.strictEqual(filter.replace('fix my bug'), 'fix my ***')
    })
})

test('Filter (Arrays)', async function (t) {
    await t.test('should check an array for profanity', async function (t) {
        assert.strictEqual(filter.check_many(['hello', 'foo']), true)
    })

    // THIS TEST CASE IS NO LONGER SUPPORTED
    // await t.test('should find profanity in an array', async function (t) {
    //     assert.deepEqual(filter.find(['hello', 'fuck']), ['fuck'])
    // })
})