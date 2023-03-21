
import latinize from 'latinize';

/**
 * @type {{[n: string]: string}}
 */
const extend = {

    '𝔞𝖆𝕒⒜ⓐ': 'a',
    '𝔟𝖇𝕓⒝ⓑ' :'b',
    '𝔠𝖈𝕔⒞ⓒ' :'c',
    '𝔡𝖉𝕕⒟ⓓ' :'d',
    '𝔢𝖊𝕖⒠ⓔ' :'e',
    '𝔣𝖋𝕗⒡ⓕ' :'f',
    '𝔤𝖌𝕘⒢ⓖ' :'g',
    '𝔥𝖍𝕙⒣ⓗ' :'h',
    '𝔦𝖎𝕚⒤ⓘ' :'i',
    '𝔧𝖏𝕛⒥ⓙ' :'j',
    '𝔨𝖐𝕜⒦ⓚ' :'k',
    '𝔩𝖑𝕝⒧ⓛ' :'l',
    '𝔪𝖒𝕞⒨ⓜ' :'m',
    '𝔫𝖓𝕟⒩ⓝ' :'n',
    '𝔬𝖔𝕠⒪ⓞ' :'o',
    '𝔭𝖕𝕡⒫ⓟ' :'p',
    '𝔮𝖖𝕢⒬ⓠ' :'q',
    '𝔯𝖗𝕣⒭ⓡ' :'r',
    '𝔰𝖘𝕤⒮ⓢ' :'s',
    '𝔱𝖙𝕥⒯ⓣ' :'t',
    '𝔲𝖚𝕦⒰ⓤ' :'u',
    '𝔳𝖛𝕧⒱ⓥ' :'v',
    '𝔴𝖜𝕨⒲ⓦ' :'w',
    '𝔵𝖝𝕩⒳ⓧ' :'x',
    '𝔶𝖞𝕪⒴ⓨ' :'y',
    '𝔷𝖟𝕫⒵ⓩ' :'z',
}

export function extend_lat() {
    for (const letters in extend) {
        for (const char of letters) {
            latinize.characters[char] = extend[letters]
        }
    }
}

export function lat(str) {
    let new_str = ''
    for (let x of str) {
        new_str += latinize.characters[x] || x
    }
    return new_str
}