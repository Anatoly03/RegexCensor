
/**
 * ==== NOTATION ====
 * 
 * USE \b TO INDICATE A WORD SPLIT
 * 
 * \b ... \b
 * 
 * OR TO MAKE SURE THAT `Filter.find` MATCHES WHOLE WORDS,
 * INDICATE PHRASES THAT CAN OCCUR ON START, AT THE END
 * OR INBETWEEN OF A WORD LIKE FOLLOWS:
 * \w* WILL MATCH ALL WORD CHARACTERS THAT PRECEED/
 * FOLLOW
 * 
 * \w* <phrase> \w*
 * 
 * e.g. \w*hello will match "hello", "ahello" and any
 * preceeding letters.
 *
 * ==== ATTRIBUTES ====
 * 
 * name: field name
 * mild: the lower the sever the use of the phrase is possible
 *       Note that Filter({mild=...}) and the mild= parameter
 *       defined here need to be thought of opposites:
 *       HERE:
 *       mild=0 IS SEVERE
 *       mild=5 IS NOT SEVERE
 *       FILTER({MILD})
 *       mild=5 CENSORS EVERYTHING
 *       mild=0 CENSORS ONLY SEVERE
 * patterns: array of patterns
 * 
 */

export default [

    /**
     * Illegalized drugs
     */

     {
        name: 'drugs',
        mild: 0,
        patterns: [
            /c(o|0)ca(i|1)ne/,
            /mar(1|i)(1|j)uana/,
        ],
    },

    /**
     * Sexually-misused words
     */

    {
        name: 'sexual',
        mild: 0,
        patterns: [
            /\banal(?!ys|is|o)\w*/,
            /\banus\w*/,
            /\bb[i|1][t|7]ch\w*/,
            /\bboner\w*/,
            /\b(c|k)ock(?!tail)\w*/,
            /\bcum\w*/,
            /\bcunt\w*/,
            /\w*dick\w*/,
            /\bdil+d[0|o]s?/,
            /\berection\w*/, // 'to erect' can be used fine with walls, buildings, etc.
            /\bm(o|u)th?(er|a)fuc?k+\w*/,
            /\b(free|freaky?)?fu(c?k|ck?)+(er)?(?!u)\w*/, // negative lookbehind u because fukushima
            /\bhorn(ey|y|i)\b/,
            /\bporn\w*/,
            /\bpuss?(y|i)?\w*/,
            /\w*puss(i|y)\b/,
            /\w*sl(u|5)t\w*/,
            /\b(smart|dumb)ass\b/,
            /\bmast(ur|er|a|ra)bat(er?|or|ing)?\b/,
            /\bvag?[i|1|j]+na\b/,
            /\w*w?h[o|0]re\w*/,
        ],
    },
    {
        name: 'sexual',
        mild: 4,
        patterns: [
            /\babortion\b/,
            /\bass(?!e|i|asin|um)\w*/,
            /\basses\b/,
            /\bpiss\w*/,
            /\bnip(ple)?\w*/,
        ],
    },
    {
        name: 'sexual',
        mild: 5,
        patterns: [
            /\b(boob|brea(s|5)t)(ie)?s?\w*/,
            /\bbutt\-?(?!on|er)\w*/,
            /\bpan(s|t|5)((i|y)es)?\w*/,
        ],
    },

    /**
     * Sexual-orientations
     */

    {
        name: 'sexuality',
        mild: 3,
        patterns: [
            /\bg(a|e)(y|i)s?\b/,
        ],
    },
    {
        name: 'sexuality',
        mild: 5,
        patterns: [
            /\ble(s|z)b(ian|a(y|i)n|in|o|e)\b/,
            /\b(bi|hetero|homo)?\-?(sexuals?|curiou?s)\b/,
            /\bhomo(bangers)?\b/,
        ],
    },

    /**
     * Words considered racist by the general public
     */

    {
        name: 'racist',
        mild: 0,
        patterns: [
            /\bn(i|1|e|l)g+(e|a|o)+(r|h)+(?!ia|un)\w*/, // un escapes japanese "nigerundayo"
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
            /\bna(z|ss)i\w*/,
            /\bhitler\b/,
        ],
    },

    /**
     * Religious keywords
     */

    {
        name: 'religious',
        mild: 3,
        patterns: [
            /\bm(u|o|0)sl(i|e|1)m\b/,
            /\ballah?\b/,
            /\bchurch\w*/,
            /\bchrist\w*/,
            /\bjesus\b/,
            /\bjew(ish)?\b/,
            /\bhell\b/,
        ],
    },
]
