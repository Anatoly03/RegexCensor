import patterns from './config/patterns.js'
import predefined from './config/predefined.js'

/**
 * new Filter({
 *    fields: ['*'],
 * })
 * @param {{fields: string[]} | '*'} config
 * @type {{patterns: RegExp[], transforms: (string | RegExp)[]}}
 */
export default function Filter(config) {
    if (typeof config == 'string') {
        config = predefined[config] || {
            fields: ['*'],
        }
    }

    this.patterns = []

    if (typeof config != 'object') return

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

