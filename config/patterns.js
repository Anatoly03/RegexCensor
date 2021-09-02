
/**
 * ==== NOTATION ====
 * 
 * - Use \b ... to indicate word split
 * - Use \b\w* ... to indicate that the word is highly-censored even inside other words.
 * - Use case-insensitive mark
 *
 */

export default [
    {
        name: 'sexual',
        patterns: [
            /\babortion\b/i,
            /\banal\w*\b/i,
            /anus/i,
            /\bass/i,
            /\bbutt/i,
            /butt\b/i,
            /\b(c|k)ock(?!tail)/i,
            /\bcum/i,
            /\bcunt*/i,
            /\b\w*dick\w*\b/i,
            /\berection/i, // 'to erect' can be used fine with walls, buildings, etc.
            /\b\w*fuck\w*\b/i,
            /\bhorn(ey|y|i)/i,
            /\bpiss.?\b/i,
            /\bporn/i,
            /\bpuss?(y|i)?/i,
            /\b(smart|dumb)ass\b/i,
            /\bmast(ur|er|a|ra)bat(e|or|ing)?/i,
            /whore/i,
        ],
    },
    {
        name: 'sexuality',
        patterns: [
            /\bgay/i,
            /\ble(s|z)b(ian|a(y|i)n|in|o|e)/i,
            /\b(bi|hetero|homo)?\-?sexual/i,
        ],
    },
    {
        name: 'racist',
        patterns: [
            /n(i|1|e|l)g+(e|a|o)*(r|h)?/i,
            /\bn(i|1|e)(g|c|k)+(e|a)*(r|h)?\b/i,
        ],
    },
    {
        name: 'historical',
        patterns: [
            /\bna(z|ss)i/i,
            /\bhitler/i,
            /\bS(S|A)\b/, // not case insensitive!!
        ],
    },
    {
        name: 'religious',
        patterns: [
            /\bmuslim\b/i,
            /\ballah?\b/i,
            /\bchurch/i,
            /\bchrist/i,
            /\bjesus\w*/i,
            /\bjew(ish)?\b/i,
        ],
    },
]
