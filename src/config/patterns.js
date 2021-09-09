
/**
 * ==== NOTATION ====
 * 
 * - Use \b ... to indicate word split
 * 
 * TO MAKE SURE THAT `Filter.find` MATCHES WHOLE WORDS,
 * INDICATE PHRASES THAT CAN OCCUR ON START, AT THE END
 * OR INBETWEEN OF A WORD LIKE FOLLOWS:
 * 
 * \b\w* <phrase> \w*\b
 *
 */

export default [
    {
        name: 'sexual',
        patterns: [
            /\babortion\b/,
            /\banal\w*\b/,
            /\banus\w*\b/,
            /\bass(?!e|i|asin|um)\w*\b/,
            /\basses\b/,
            /\bb[i|1][t|7]ch\w*\b/,
            /\bboner\w*\b/,
            /\b(boob|brea(s|5)t)(ie)?s?\w*\b/,
            /\bbutt\b/,
            /\b(c|k)ock(?!tail)\w*\b/,
            /\bcum\w*\b/,
            /\bcunt\w*\b/,
            /\b\w*dick\w*\b/,
            /\bdil+d[0|o]s?\b/,
            /\berection\w*\b/, // 'to erect' can be used fine with walls, buildings, etc.
            /\bm(o|u)th?(er|a)fuc?k+\w*\b/,
            /\bfuc?k+(?:u)?\w*\b/, // negative lookbehind u because fukushima
            /\bhorn(ey|y|i)\b/,
            /\bpiss.?\b/,
            /\bporn\w*\b/,
            /\bpuss?(y|i)?\w*\b/,
            /\b(smart|dumb)ass\b/,
            /\bmast(ur|er|a|ra)bat(e|or|ing)?\b/,
            /\bvag?[i|1|j]+na\b/,
            /\b\w*w?h[o|0]re\w*\b/,
        ],
    },
    {
        name: 'sexuality',
        patterns: [
            /\bg(a|e)(y|i)s?\b/,
            /\ble(s|z)b(ian|a(y|i)n|in|o|e)\b/,
            /\b(bi|hetero|homo)?\-?sexuals?\b/,
        ],
    },
    {
        name: 'racist',
        patterns: [
            /\bn(i|1|e|l)g+(e|a|o)+(r|h)+(?!ia|u)\w*\b/,
            /\bn(i|1|e)(g|c|k)+(e|a)*(r|h)?\b/,
        ],
    },
    {
        name: 'historical',
        patterns: [
            /\bna(z|ss)i\w*\b/,
            /\bhitler\b/,
        ],
    },
    {
        name: 'religious',
        patterns: [
            /\bmuslim\b/,
            /\ballah?\b/,
            /\bchurch\w*\b/,
            /\bchrist\w*\b/,
            /\bjesus\b/,
            /\bjew(ish)?\b/,
            /\bhell\b/,
        ],
    },
]
