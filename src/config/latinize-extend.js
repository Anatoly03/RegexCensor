
import latinize from 'latinize';

/**
 * @type {{[n: string]: string}}
 */
const extend = {
    'Ωø' :'O',
    'Қ' :'K',

    // Fraktur Small
    // Fraktur Bold
    // Mathematical Double-Struck
    // Parenthised Latin
    // Circle Latin

    '𝔄𝕬𝔸🄐Ⓐ': 'A',
    '𝔅𝕭𝔹🄑Ⓑ': 'B',
    'ℭ𝕮ℂ🄒Ⓒ': 'C',
    '𝔇𝕯𝔻🄓Ⓓ': 'D',
    '𝔈𝕰𝔼🄔Ⓔ': 'E',
    '𝔉𝕱𝔽🄕Ⓕ': 'F',
    '𝔊𝕲𝔾🄖Ⓖ': 'G',
    'ℌ𝕳ℍ🄗Ⓗ': 'H',
    'ℑ𝕴𝕀🄘Ⓘ': 'I',
    '𝔍𝕵𝕁🄙Ⓙ': 'J',
    '𝔎𝕶𝕂🄚Ⓚ': 'K',
    '𝔏𝕷𝕃🄛Ⓛ': 'L',
    '𝔐𝕸𝕄🄜Ⓜ': 'M',
    '𝔑𝕹ℕ🄝Ⓝ': 'N',
    '𝔒𝕺𝕆🄞Ⓞ': 'O',
    '𝔓𝕻ℙ🄟Ⓟ': 'P',
    '𝔔𝕼ℚ🄠Ⓠ': 'Q',
    'ℜ𝕽ℝ🄡Ⓡ': 'R',
    '𝔖𝕾𝕊🄢Ⓢ': 'S',
    '𝔗𝕿𝕋🄣Ⓣ': 'T',
    '𝔘𝖀𝕌🄤Ⓤ': 'U',
    '𝔙𝖁𝕍🄥Ⓥ': 'V',
    '𝔚𝖂𝕎🄦Ⓦ': 'W',
    '𝔛𝖃𝕏🄧Ⓧ': 'X',
    '𝔜𝖄𝕐🄨Ⓨ': 'Y',
    'ℨ𝖅ℤ🄩Ⓩ': 'Z',

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