import Filter from './filter.js'
import { extend_lat } from './config/latinize-extend.js'
extend_lat()

import './methods/add.js'
import './methods/check.js'
import './methods/find.js'
import './methods/match.js'
import './methods/replace.js'

export default function (config) {
    return new Filter(config)
}