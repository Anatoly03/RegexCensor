import patterns from '../config/patterns.js'

/**
 * new Filter({
 *    subjects: ['sexual']
 * })
 * @param {{fields: string[]}} config
 * @type {{patterns: RegExp[]}}
 */
export function Filter(config) {
    this.patterns = []

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
    throw 'Filter.add() requires RegExp or an array of regex patterns as parameter input.'
}

/**
 * @method check
 * @param {string | string[]} str String(s) to proof for profanity
 */
Filter.prototype.check = function (str) {
    if (typeof str == 'string') {
        for (const pat of this.patterns) {
            if (pat.test(str)) return true
        }
        return false
    } else if (Array.isArray(str)) {
        for (const s of str) {
            if (this.check(s)) return true
        }
        return false
    }
    throw 'Filter.check() requires string or an array of strings as parameter input.'
}
