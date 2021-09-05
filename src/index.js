import Filter from '../lib/filter.js'
import { extend_lat } from '../config/latinize-extend.js'
extend_lat()

export default function (config) {
    return new Filter(config)
}
