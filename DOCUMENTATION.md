TODO

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