import { Filter } from './lib/filter.js'

const str = 'Hello World!'
const filter = new Filter({
    fields: ['sexual'],
})

console.log(filter.check(str))
