# Filter

> **New Major Version is out - 1.1.0**
> 
> CHANGES:
> - Rewritten to Rust (Performance boost)
> - `.find()` does not return every element uniquely anymore ['foo', 'foo', 'bar'] is no longer compressed to ['foo', 'bar']
> - Arrays of matches are now sets, hence not sorted chronologically
> - Built in support for arrays removed.

A regex based adaptable profanity filter.

```sh
npm i regexcensor
```

This module uses Rust's Fancy Regex, read more:

- [Rust Regex](https://crates.io/crates/regex)
- [Fancy Regex](https://docs.rs/fancy-regex/latest/fancy_regex/#usage)

## Importing the Filter

```js
import Filter from 'regexcensor'
```

## Predefined Filter Sets

If the input is a string, the filter will be set to a predefined swear preset.

```js
const filter = Filter('PG13')
```

| Field  | Description                                                    |
| ------ | -------------------------------------------------------------- |
| `*`    | Include all possible negatively-associated words.              |
| `PG13` | Less words filtered, minimum for a child-friendly environment. |

## Configuring the Filter

If you want to configure a certain preset of of censored words, you can pass a configuring object like follows. All configurative attributes are optional.

```js
const filter = Filter({
    patterns: [],
    words: [],
})
```

### Patterns

Define your own set of regex-defined patterns.

### Words

RegexCensor provides an oversimplified regex construction.

For example, `hello` will automatically filter `hellllllooooooo`, `he11o`, but also `h3110`. End and/or start a word with `*` if the substring after or before doesn't matter. `hello*` will censor `many hellos` and `hellowwwwwwssssss`.

## Methods

### `Filter.add_preset(string)`

Add list of predefined expressions of a section with `Filter.add_preset(string)`. For a list of defined patterns go to [Patterns](./PATTERNS.md)

### `Filter.add(RegExp)`

Adds the patterns to the filter, to quickly add regex arrays to the filter, use `Filter.add_many(RegExp[])`

### `Filter.add_word(string)`

Adds a word to the filter, to quickly add arrays of words to the filter, use `Filter.add_many_words(RegExp[])`

### `Filter.check(string) : boolean`

Checks one or several strings for profanity defined by the Filter. Returns `true` if any string triggers the patterns and `false` otherwise, to quickly check arrays with the filter, use `Filter.check_many(string[]) : boolean`

### `Filter.find(string) : string[]`

Checks one or several strings for profanity defined by the Filter. Returns all emitted profane words.

### `Filter.find_patterns(string) : string[]`

Checks one or several strings for profanity defined by the Filter. Returns all emitted regex pattern _sources_.

### `Filter.replace(string) : string`

Replaces profanity in the string with asterisks.

## Testing the Repository

-   Run `npm run test` to test the code with mocha.
-   Run `npm run check` to test different phrases in the console.
-   Run `npm run codegen` to generate rust code files from `latin.txt` and `universal.txt`
-   Run `npm run build` to build web assembly from rust code in `/lib` to `/build`
-   Run `npm run wat` to build web assembly textfile from wasm in `/build`

## Sources

Inspired from: https://www.cs.cmu.edu/~biglou/resources/bad-words.txt
Inspired from: https://github.com/Minehut/MinehutBOT/blob/master/src/util/censorRules.ts

_No content was directly cloned or copied, I took my time to rethink every regex. The only thing that are similar are the words. This statement does not apply to `latin.txt` which is copied from_ https://github.com/dundalek/latinize/blob/master/latinize.js
