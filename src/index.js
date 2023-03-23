import { Filter as RustFilter } from "../build/lib.js";
import './preset.js'

/**
 * 
 * @param {{patterns: string[], words: string[]}} config 
 * @returns 
 */
export default function (config) {
    let filter = new RustFilter();
    if (config == '*') return filter.add_preset('*');
    if (typeof config != "object") return filter;

    /**
     * Add 'topics' to the filter
     */
    if (Array.isArray(config.fields)) {
        for (const field of patterns) {
            if (
                (config.fields.includes("*") ||
                    config.fields.includes(field.name)) &&
                config.mild >= field.mild
            ) {
                for (let p of field.patterns) filter.add(p.source);
            }
        }
    }

    if (Array.isArray(config.patterns)) {
        for (const field of config.patterns) {
            filter.add(field);
        }
    }

    if (Array.isArray(config.words)) {
        for (const field of config.words) {
            filter.add_word(field);
        }
    }

    return filter;
}
