
/**
 * ==== NOTATION ====
 * 
 * - Use \b ... to indicate word split
 * - Use case-insensitive mark
 *
 */

export default [
    {
        name: 'sexual',
        patterns: [
            /\babortion\b/,
            /\banal/,
            /anus/,
            /\bass/,
            /\bbitch/,
            /\bboner/,
            /\b(boob|brea(s|5)t)(ie)?s?/,
            /\bbutt/,
            /butt\b/,
            /\b(c|k)ock(?!tail)/,
            /\bcum/,
            /\bcunt*/,
            /dick/,
            /\berection/, // 'to erect' can be used fine with walls, buildings, etc.
            /fuck/,
            /\bhorn(ey|y|i)/,
            /\bpiss.?\b/,
            /\bporn/,
            /\bpuss?(y|i)?/,
            /\b(smart|dumb)ass\b/,
            /\bmast(ur|er|a|ra)bat(e|or|ing)?/,
            /whore/,
        ],
    },
    {
        name: 'sexuality',
        patterns: [
            /\bg(a|e)(y|i)s?\b/,
            /\ble(s|z)b(ian|a(y|i)n|in|o|e)/,
            /\b(bi|hetero|homo)?\-?sexual/,
        ],
    },
    {
        name: 'racist',
        patterns: [
            /n(i|1|e|l)g+(e|a|o)+(r|h)+(?!ia|u)/,
            /\bn(i|1|e)(g|c|k)+(e|a)*(r|h)?\b/,
        ],
    },
    {
        name: 'historical',
        patterns: [
            /\bna(z|ss)i/,
            /\bhitler/,
        ],
    },
    {
        name: 'religious',
        patterns: [
            /\bmuslim\b/,
            /\ballah?\b/,
            /\bchurch/,
            /\bchrist/,
            /\bjesus/,
            /\bjew(ish)?\b/,
        ],
    },
]
