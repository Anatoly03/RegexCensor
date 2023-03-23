# MEGATHREAD for sharing Patterns

Use this markdown file to push and share your different regexes. Changes to this file are only under the consent to **NEUTRALITY**: You may add regular expressions with ease, however deleting patterns for "controversial reasons" is not accepted. Reasons for pattern deletion can be: (1) The pattern is wrong. (2) The pattern has false negatives. (3) The pattern cannot be used as an expression to harm under any circumstance.

Definitions:
- An expression is **positive**, if it is a correct match within a given section.
- An expression is **negative**, if it is an invalid match within a given section.

### Contribution Standarts

1. Use `\b` to indicate a word split. Use `\w*` to indicate word continuation. This is to ensure that the Filter methods match the entire expression. `\bfoo\w*` will match `foobar` but not `barfoo`
2. Avoid overlapping patterns.
3. Use the following format to add pattern columns: ```|| `$EXPRESSION` |```. If the expression is too far off the simple patterns it's supposed to be, write after the last vertical bar (`|`) the explanation what this pattern matches. The explanation can also be used to adress false negatives and why to be careful with the regex.
4. The format `| **$FIELD** ||` is used to describe new sections. Sections are collection of expressions based on similar definition traits.

## PATTERNS

| Field | Pattern | *
|:-:|-|-
| `drugs` | **Illegalized Drugs** – Addictive substances that world-wide nations have been declared illegal.
|| `\bc[o0]ca[i1]ne\b` |
|| `\bmar[1i]+uana\b` |
| `sexual` | **Sexual** – Words in the field of sexual topics, reproduction or erotic body parts or fluids.
|| `\banal(?!ys\|is\|o)\w*` | Escape: Analysis, Analogy, Analist
|| `\banus\w*` |
|| `\bb[i1][t7]ch\w*` |
|| `\bboner\w*` |
|| `\bblowjob\b` |
|| `\b[ck]ock(?!tail\|er)\w*` | Escape: cocktail, [cocker (dog breed)](https://www.akc.org/dog-breeds/cocker-spaniel/)
|| `\bcum(?!u)\w*` | Escape: cumulative
|| `\bcunt\w*` |
|| `\w*dick\w*` |
|| `\bdil+d[0o]s?\b` |
|| `\berection\w*` | Escape: 'to erect' usage with walls, buildings, etc. is a negative
|| `\bejaculat\w*` | Discuss: [old fashioned 'to say'](https://dictionary.cambridge.org/dictionary/english/ejaculate) (Negative?)
|| `\bcho(ad\|de)s?\b` |
|| `\bfuc?k+\w*` |
|| `\b(free\|freaky?\|m[ou]+th?(er\|a))?fu(c?k\|ck?)+(er)?(?!u)((e\w*\|ing?\|able)?\b)\w*` | Escape: Fukushima
|| `\bhorn(ey\|y\|i)\b` |
|| `\bporn\w*` |
|| `\bpuss?(y\|i)?\w*` | Discuss: Escape: Puss in Boots
|| `\w*puss(i\|y)\b` | Discuss: Rule 2 with above
|| `\w*sl[u5]t\w*` |
|| `\b(smart\|dumb)ass\b` |
|| `\bmast(ur\|er\|a\|ra)bat(er?\|or\|ing)?\b` |
|| `\bvag?[ij1]+na\b` |
|| `\w*w?h[o0]re\w*` |
|| `\babortion\b` |
|| `\bass(?!e(?!s)\|i\|y\|asin\|um\|o)\w*` | Escape: Assasin, Assembly, Assylum, Assymetric, Assume
|| `\bpiss\w*` |
|| `\bnip(ple)?\w*` |
|| `\btits?\b` | Escape: Titanic, Title, Titus
|| `\b(boob\|brea[s5]t)(ie)?s?\w*` | 
|| `\bbutt\-?(?!on\|er)\w*` | Escape: Button, Butter
|| `\bpan[st5]([iy]es)?\w*` | 
|| `\bbra\b` | 
| `sexual-anime` | **Anime Sexual** – Anime-coined expressions that that are sexual.
|| `\bloli(ta\|\-?con)?\b` |
|| `\bh[e3]n[5t]a?i\b` |
| `racist` | **Racist** – Racial-deregatory expressions
|| `\bn[i1el]g+[eao]+[rh]+(?!ia\|un)\w*` | Escape: Nigerundayo, [Nigeria](https://en.wikipedia.org/wiki/Nigeria), [Niger](https://en.wikipedia.org/wiki/Niger) [false negative!]
|| `\bn[i1e][gck]+[ea]*[rh]?\b` |
| `historical` | **Historically Negative-coined Terms** – Terminalogy from early history, mostly political past, that became terms of negative association today.
|| `\bna(z\|ss)i\w*` |
|| `\bhitler\b` |
| `political` | **Political words** – Section of political terms
|| `\b(left\|right)\bwing\b` |
| `religious` | **Religious words** – Section of religious terms
|| `\bm[uo0]sl[ie1]m\w*` |
|| `\ba[l\|1]+ah?\w*` |
|| `\bchurch\w*` |
|| `\bchri[s5]t\w*` |
|| `\bje[s5]u[s5]\w*` |
|| `\bjew(ish)?\b` |
|| `\bhe[l\|1]{2}(?!o)\w*` | Escape: Hello
| `private` | **Personal data** – Patterns that match personal data such as phone numbers and emails
|| `\b[\w-]+(\.[\w-]+)*@([\w-]+\.)+([\w-]{2,4})\b` | Explanation: Email

## END-PATTERNS