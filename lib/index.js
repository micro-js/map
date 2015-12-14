/**
 * Modules
 */

var isArray = require('@micro-js/is-array')
var mapArray = require('@micro-js/map-array')
var isObject = require('@micro-js/is-object')
var mapObj = require('@micro-js/map-obj')
var isFunction = require('@micro-js/is-function')

var supportsGen = require('@micro-js/supports-gen')
if (supportsGen()) {
  var isGenerator = require('@micro-js/is-generator')
  var mapGen = require('@micro-js/map-gen')
}


/**
 * Expose map
 */

module.exports = map['default'] = map

/**
 * map
 */

function map (fn, val) {
  if (isArray(val)) return mapArray(fn, val)
  if (isObject(val)) return mapObj(fn, val)
  if (supportsGen() && isGenerator(val)) {
    return mapGen(fn, val)
  }
  if (isFunction(val.map)) return val.map(fn)
}
