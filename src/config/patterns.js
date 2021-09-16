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
 * === SEVERAL REGECES THAT DEFINE THE SAME WORD ===
 *
 * HOW `STRING.FIND` WORKS: searches through regeces,
 * returns match for any. Therefore, AVOID PATTERNS
 * OVERLAP!!!
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
            /c[o0]ca[i1]ne/,
            /mar[1i]+uana/
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
            /\bb[i1][t7]ch\w*/,
            /\bboner\w*/,
            /\bblowjob\b/,
            /\b[ck]ock(?!tail)\w*/,
            /\bcum(?!u)\w*/, // negative lookahead escapes "cumulative"
            /\bcunt\w*/,
            /\bcho(ad|de)s?\b/,
            /\w*dick\w*/,
            /\bdil+d[0o]s?/,
            /\berection\w*/, // 'to erect' can be used fine with walls, buildings, etc.
            /\bejaculat\w*/,
            // <censorship word="fuck">
            /\bm[ou]+th?(er|a)fuc?k+\w*/,
            /\b(free|freaky?)?fu(c?k|ck?)+(er)?(?!u)\w*/, // negative lookahead escapes "fukushima"
            /\w*fuck(e\w*|ing?|able)?\b/,
            // </censorship>
            /\bhorn(ey|y|i)\b/,
            /\bporn\w*/,
            /\bpuss?(y|i)?\w*/,
            /\w*puss(i|y)\b/,
            /\w*sl[u5]t\w*/,
            /\b(smart|dumb)ass\b/,
            /\bmast(ur|er|a|ra)bat(er?|or|ing)?\b/,
            /\bvag?[ij1]+na\b/,
            /\w*w?h[o0]re\w*/,
        ],
    },
    {
        name: 'sexual',
        mild: 3,
        patterns: [
            /\babortion\b/,
            /\bass(?!e(?!s)|i|asin|um|o)\w*/, // censor ass, assault, but not assembly, assumption, association, assign or assasin
            /\bpiss\w*/,
            /\bnip(ple)?\w*/,
            /\btit(?!a|r)\w*/, // negative lookahead escapes: Titan(ic), Titrus,
            /\bloli(ta|\-?con)?\b/,
            /\bh[e3]n[5t]a?i\b/,
        ],
    },
    {
        name: 'sexual',
        mild: 5,
        patterns: [
            /\b(boob|brea[s5]t)(ie)?s?\w*/,
            /\bbutt\-?(?!on|er)\w*/,
            /\bpan[st5]([iy]es)?\w*/,
            /\bbra\b/,
        ],
    },

    /**
     * Sexual-orientations
     */

    {
        name: 'sexuality',
        mild: 3,
        patterns: [
            /\bg[ae][yi]s?\b/
        ],
    },
    {
        name: 'sexuality',
        mild: 5,
        patterns: [
            /\ble[sz]b(ian|a[yi]n|in|o|e)\b/,
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
            /\bn[i1el]g+[eao]+[rh]+(?!ia|un)\w*/, // un escapes japanese "nigerundayo"
            /\bn[i1e][gck]+[ea]*[rh]?\b/,
        ],
    },

    /**
     * History and politics
     */

    {
        name: 'historical',
        mild: 3,
        patterns: [
            /\bna(z|ss)i\w*/,
            /\bhitler\b/
        ],
    },

    /**
     * Religious keywords
     */

    {
        name: 'religious',
        mild: 3,
        patterns: [
            /\bm[uo0]sl[ie1]m\w*/,
            /\ba[l|1]+ah?\w*/,
            /\bchurch\w*/,
            /\bchri[s5]t\w*/,
            /\bje[s5]u[s5]\w*/,
            /\bjew(ish)?\b/,
            /\bhe[l|1]{2}(?!o)\w*/,
        ],
    },

    /**
     * Anime
     */

    {
        name: 'anime',
        mild: 3,
        patterns: [
            /\bh(e|3)n(5|t)a?i\b/
        ],
    },
]
