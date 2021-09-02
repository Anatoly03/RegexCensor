# Filter

A regex based adaptable profanity filter.

## Enabling the Filter

```js
const filter = new Filter({
    fields: ['sexual'],
})
```

### Word Fields

Word fields are defined sets of regex patterns. `fields: ['*']` will match all fields.

## Methods

### `Filer.add([RegExp, ...])`

Adds the patterns to the filter.

### `Filer.check([string, ...] | string)`

Checks one or several strings for profanity defined by the Filter. Returns `true` if any string triggers the patterns and `false` otherwise.