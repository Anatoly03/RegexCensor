import readline from 'readline'
import latinize from 'latinize';
import Filter from '../lib/filter.js'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const filter = new Filter('*')

async function read_line() {
    // https://nodejs.org/en/knowledge/command-line/how-to-prompt-for-command-line-input/
    rl.question('', function (str) {
        console.log('  \x1b[36m', latinize(str), '\x1b[0m')
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
