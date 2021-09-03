import latinize from 'latinize'
import latinizeExtend from '../config/latinize-extend.js'
import patterns from '../config/patterns.js'

latinizeExtend(latinize.characters)

/**
 * new Filter({
 *    fields: ['sexual'],
 *    transforms: ['*'],
 * })
 * @param {{fields: string[]} | '*'} config
 * @type {{patterns: RegExp[], transforms: (string | RegExp)[]}}
 */
export default function Filter(config) {
    if (config == '*') {
        config = {
            fields: ['*'],
            transforms: ['*'],
        }
    }

    //console.log(latinize('ℂⓤ𝖓T'), latinize('𝔠𝖈𝕔⒞ⓒ'))

    this.patterns = []
    this.transforms = []

    if (!config) return

    if (Array.isArray(config.fields)) {
        for (const field of patterns) {
            if (
                config.fields.includes('*') ||
                config.fields.includes(field.name)
            ) {
                this.addField(field.name)
            }
        }
    }
}

/**
 * @method addField
 * @param {string} key Field Name to add
 */
Filter.prototype.addField = function (key) {
    if (typeof key != 'string')
        throw 'Filter.addField(key) ~ key is expected to be of type string'

    for (const field of patterns) {
        if (field.name == key) {
            this.add(field.patterns)
            return
        }
    }
}

/**
 * @method add
 * @param {RegExp | RegExp[]} pat Field Name to add
 */
Filter.prototype.add = function (pat) {
    if (pat instanceof RegExp) {
        for (const pat of this.patterns) {
            if (pat.test(str)) return true
        }
        return
    } else if (Array.isArray(pat)) {
        for (const field of pat) {
            this.patterns.push(field)
        }
        return
    }
    throw 'Filter.add() expects RegExp or an array of regex patterns as parameter input.'
}

/**
 * @method check
 * @param {string | string[]} str String(s) to proof for profanity
 */
Filter.prototype.check = function (str) {
    if (typeof str == 'string') {
        return this.checkString(str)
    } else if (Array.isArray(str)) {
        for (const s of str) {
            if (this.check(s)) return true
        }
        return false
    }
    throw 'Filter.check() expects string or an array of strings as parameter input.'
}

/**
 * @method check
 * @param {string} str String(s) to proof for profanity
 * @return {boolean} Does string match any patterns?
 */
Filter.prototype.checkString = function (str) {
    // https://www.npmjs.com/package/latinize
    str = latinize(str)

    for (const pat of this.patterns) {
        if (pat.test(str)) return true
    }

    return false
}

/**
 * @method check
 * @param {string} str String(s) to proof for profanity
 * @returns {RegExp[]}
 */
 Filter.prototype.match = function (str) {
    if (typeof str == 'string') {
        return this.matchString(str)
    } else if (Array.isArray(str)) {
        const emits = []
        for (const s of str) {
            const arr = this.match(s)
            for (const a of arr) {
                emits.push(arr[a])
            }
        }
        return emits
    }
    throw 'Filter.match() expects string or an array of strings as parameter input.'
}

/**
 * @method check
 * @param {string} str String(s) to proof for profanity
 * @returns {RegExp[]}
 */
Filter.prototype.matchString = function (str) {
    str = latinize(str)
    const emits = []

    for (const pat of this.patterns) {
        if (pat.test(str)) emits.push(pat)
    }

    return emits
}
