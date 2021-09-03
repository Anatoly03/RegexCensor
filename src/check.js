import readline from 'readline'
import Filter from '../lib/filter.js'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const filter = new Filter('*')

async function read_line() {
    // https://nodejs.org/en/knowledge/command-line/how-to-prompt-for-command-line-input/
    rl.question('', function (str) {
        if (filter.check(str)) {
            // https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
            console.log('\x1b[31mTRIGGERED\x1b[0m')
            for (const pat of filter.matchString(str)) {
                console.log('  ', pat)
            }
        } else {
            console.log('\x1b[32mSAFE\x1b[0m')
        }
        read_line()
    })
}

read_line()
