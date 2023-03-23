# Filter

A rust-written regex based adaptable string-manipulation pipeline. Can be used to censor profanity or quickly scan large bodies of text for certain patterns.

```sh
npm i regexcensor
```

This module uses Rusts' Regex Crates, read more at [Rust Regex](https://crates.io/crates/regex) and [Fancy Regex](https://docs.rs/fancy-regex/latest/fancy_regex/#usage)

## Importing the Filter

```js
import Filter from 'regexcensor'

const filter = Filter()
```

## Npm Commands

-   Run `npm run test` to test the code with mocha.
-   Run `npm run check` to test different phrases in the console.
-   Run `npm run codegen` to generate rust code files from `latin.txt` and `universal.txt`
-   Run `npm run build` to build web assembly from rust code in `/lib` to `/build`
-   Run `npm run wat` to build web assembly textfile from wasm in `/build`

## Sources

Inspired from: https://www.cs.cmu.edu/~biglou/resources/bad-words.txt
Inspired from: https://github.com/Minehut/MinehutBOT/blob/master/src/util/censorRules.ts

_No content was directly cloned or copied, I took my time to rethink every regex. The only thing that are similar are the words. This statement does not apply to `latin.txt` whose characters are directly taken from_ https://github.com/dundalek/latinize/blob/master/latinize.js
