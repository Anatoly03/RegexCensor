import readline from 'readline'
import Filter from './filter.js'
import { extend_lat, lat } from './config/latinize-extend.js'
extend_lat()

import './methods/check.js'
import './methods/find.js'
import './methods/match.js'
import './methods/replace.js'

export default function (config) {
    return new Filter(config)
}

if (process.env.DEBUG_FILTER) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    })

    const filter = new Filter('*')

    async function read_line() {
        // https://nodejs.org/en/knowledge/command-line/how-to-prompt-for-command-line-input/
        rl.question('', function (str) {
            console.log('   LATINZED: \x1b[36m', lat(str), '\x1b[0m')
            console.log('   REPLACED: \x1b[36m', filter.replace(str), '\x1b[0m')
            if (filter.check(str)) {
                for (const pat of filter.matchString(str)) {
                    console.log('  ', pat)
                }
            } else {
                // https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
                console.log('   \x1b[32msafe\x1b[0m')
            }
            read_line()
        })
    }

    read_line()
}
