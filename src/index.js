import Filter from '../lib/filter.js'

const str = 'Hello World!'
const filter = new Filter('*')

console.log(filter.check(str))

console.log('ằss'.normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
