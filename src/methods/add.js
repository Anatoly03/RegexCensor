import Filter from '../filter.js'

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
 * @method add
 * @param {string | string[]} word Words to add
 */
Filter.prototype.addWord = function (word) {
    if (Array.isArray(word)) {
        for (const field of word) {
            this.patterns.addWord(field)
        }
        return
    }

    let p = ''

    for (var i = 0; i < word.length; i++) {
        const char = word[i].toLowerCase()

        if (i == 0 && word.length > 1) {
            if (char == '*') {
                p += '\\w*'
                continue
            }
            p += '\\b'
        }

        switch (char) {
            case 'e':
                p += `[e3]+`
                break

            case 'i':
            case 'j':
                p += `[ij1]+`
                break

            case 'l':
                p += `[jl1]+`
                break

            case 'o':
                p += `[o0]+`
                break

            case 's':
            case 'z':
                p += `[sz53]+`
                break

            case 'a':
            case 'b':
            case 'c':
            case 'd':
            case 'f':
            case 'g':
            case 'h':
            case 'k':
            case 'm':
            case 'n':
            case 'p':
            case 'q':
            case 'r':
            case 't':
            case 'u':
            case 'v':
            case 'w':
            case 'x':
            case 'y':
                p += char + '+'
                break

            default:
                p += `\\${char}`
        }

        if (i + 1 == word.length && word.length > 1) {
            if (char == '*') {
                p += '\\w*'
                console.log(p)
                continue
            }
            p += '\\b'
        }
    }

    this.patterns.push(p)
}
