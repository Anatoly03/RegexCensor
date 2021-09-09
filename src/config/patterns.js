
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
 * ==== ATTRIBUTES ====
 * 
 * name: field name
 * mild: the lower the sever the use of the phrase is possible
 *       mild=0 means the word is extremely serious if used
 *       incorrect
 * patterns: array of patterns
 * 
 */

export default [

    /**
     * Sexually-misused words
     */

    {
        name: 'sexual',
        mild: 0,
        patterns: [
            /\banal(?!ys|is|o)\w*\b/,
            /\banus\w*\b/,
            /\bb[i|1][t|7]ch\w*\b/,
            /\bboner\w*\b/,
            /\b(c|k)ock(?!tail)\w*\b/,
            /\bcum\w*\b/,
            /\bcunt\w*\b/,
            /\b\w*dick\w*\b/,
            /\bdil+d[0|o]s?\b/,
            /\berection\w*\b/, // 'to erect' can be used fine with walls, buildings, etc.
            /\bm(o|u)th?(er|a)fuc?k+\w*\b/,
            /\bfuc?k+(?:u)?\w*\b/, // negative lookbehind u because fukushima
            /\bhorn(ey|y|i)\b/,
            /\bporn\w*\b/,
            /\bpuss?(y|i)?\w*\b/,
            /\b(smart|dumb)ass\b/,
            /\bmast(ur|er|a|ra)bat(e|or|ing)?\b/,
            /\bvag?[i|1|j]+na\b/,
            /\b\w*w?h[o|0]re\w*\b/,
        ],
    },
    {
        name: 'sexual',
        mild: 1,
        patterns: [
            /\babortion\b/,
            /\bass(?!e|i|asin|um)\w*\b/,
            /\basses\b/,
        ],
    },
    {
        name: 'sexual',
        mild: 2,
        patterns: [
            /\b(boob|brea(s|5)t)(ie)?s?\w*\b/,
            /\bbutt\b/,
            /\bpiss\w*\b/,
        ],
    },

    /**
     * Sexual-orientations
     */

    {
        name: 'sexuality',
        mild: 0,
        patterns: [
            /\bg(a|e)(y|i)s?\b/,
        ],
    },
    {
        name: 'sexuality',
        mild: 1,
        patterns: [
            /\ble(s|z)b(ian|a(y|i)n|in|o|e)\b/,
            /\b(bi|hetero|homo)?\-?sexuals?\b/,
        ],
    },

    /**
     * Words considered racist by the general public
     */

    {
        name: 'racist',
        mild: 0,
        patterns: [
            /\bn(i|1|e|l)g+(e|a|o)+(r|h)+(?!ia|u)\w*\b/,
            /\bn(i|1|e)(g|c|k)+(e|a)*(r|h)?\b/,
        ],
    },

    /**
     * History and politics
     */

    {
        name: 'historical',
        mild: 0,
        patterns: [
            /\bna(z|ss)i\w*\b/,
            /\bhitler\b/,
        ],
    },

    /**
     * Religious keywords
     */

    {
        name: 'religious',
        mild: 1,
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
