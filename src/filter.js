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
            mild: 0,
            patterns: [],
        }
    }

    this.patterns = []

    if (typeof config != 'object') return

    if (Array.isArray(config.fields)) {
        for (const field of patterns) {
            if (
                (config.fields.includes('*') ||
                config.fields.includes(field.name)) &&
                config.mild >= field.mild
            ) {
                this.add(field.patterns)
            }
        }
    }

    if (Array.isArray(config.patterns)) {
        for (const field of config.patterns) {
            this.patterns.push(field)
        }
    }
}
