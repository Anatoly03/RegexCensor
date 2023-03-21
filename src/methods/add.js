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
