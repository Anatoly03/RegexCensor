/**
 * ***** TRANSFORMATIONS *****
 *
 *
 *
 * ==== NOTATION ====
 *
 * - Use \b ... to indicate word split
 * - Use \b\w* ... to indicate that the word is highly-censored even inside other words.
 * - Use case-insensitive mark
 *
 */

export default [
    {
        name: 'diacritics',
        normalize: 'NFD',
        transforms: [
            // https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript
            [/[\u0300-\u036f]/g, ''],
        ],
    },
]
