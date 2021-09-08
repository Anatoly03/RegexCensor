# Filter

A regex based adaptable profanity filter.

```
npm i regexcensor
```

## Enabling the Filter

```js
import Filter from 'regexcensor'

const filter = Filter('*')
```

## Predefined Filter Sets

If the input is a string, the filter will be set to a predefined swear preset.

```js
const filter = Filter('PG13')
```

|Field| Description
|-|-
|`*`| Include all possible negatively-associated words.
|`PG13`| Less words filtered, minimum for a child-friendly environment.

## Configuring the Filter

If you want to configure a certain preset of of censored words, you can pass a configuring object like follows:

```js
const filter = Filter({
    fields: ['*'],
})
```

### Fields

|Field| Description
|-|-
|`*`| Include all fields.
|`sexual`| General set of sexually-oriented swear words.
|`sexuality`| List of sexual orientations.
|`racist`| Set of racist swear words.
|`historical`| Historical or political ideas or terms, for example from WW2.
|`religious`| Religious terminilogy.

## Methods

### `Filter.add([RegExp, ...])`

Adds the patterns to the filter.

### `Filter.check([string, ...] | string) : boolean`

Checks one or several strings for profanity defined by the Filter. Returns `true` if any string triggers the patterns and `false` otherwise.

### `Filter.find([string, ...] | string) : string[]`

Checks one or several strings for profanity defined by the Filter. Returns all emitted profane words.

### `Filter.match([string, ...] | string) : RegExp[]`

Checks one or several strings for profanity defined by the Filter. Returns all emitted regex patterns.

### `Filter.replace(string) : string`

Replaces profanity in the string with asterisks.

## Testing the Repository

- Run `npm run test` to test the code with mocha.
- Run `npm run check` to test different phrases in the console.