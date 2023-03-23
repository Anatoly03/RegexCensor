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
     * Sexually-misused words
     */

    {
        name: 'sexual',
        mild: 0,
        patterns: [
            //,
            //,
            //,
            //,
            //,
            //,
            //, // negative lookahead escapes ""
            //,
            //,
            //,
            //,
            //, // 'to erect' can be used fine with walls, buildings, etc.
            //,
            // <censorship word="fuck">
            //,
            //, // negative lookahead escapes "fukushima"
            /\w*fuck(e\w*|ing?|able)?\b/,
            // </censorship>
            //,
            //,
            //,
            //,
            //,
            //,
            //,
            //,
            //,
        ],
    },
    {
        name: 'sexual',
        mild: 3,
        patterns: [
            //,
            //, // censor ass, assault, but not assembly, assumption, association, assign or assasin
            //,
            //,
            //, // negative lookahead escapes: Titan(ic), Titrus,
            //,
            //,
        ],
    },
    {
        name: 'sexual',
        mild: 5,
        patterns: [
            //,
            //,
            //,
            //,
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
            
            /\bniger(?ia|un)/
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
            //
        ],
    },

    /**
     * Emails
     */

    {
        name: 'private',
        mild: 0,
        patterns: [
            /\b[\w-]+(\.[\w-]+)*@([\w-]+\.)+([\w-]{2,4})\b/ // Emails
        ],
    },
]