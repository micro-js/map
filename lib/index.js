/**
 * Modules
 */

var isArray = require('@f/is-array')
var mapArray = require('@f/map-array')
var isObject = require('@f/is-object')
var mapObj = require('@f/map-obj')
var isFunction = require('@f/is-function')
var isUndefined = require('@f/is-undefined')
var isNull = require('@f/is-null')

var supportsGen = require('@f/supports-gen')
if (supportsGen()) {
  var isGenerator = require('@f/is-generator')
  var mapGen = require('@f/map-gen')
}

/**
 * Expose map
 */

module.exports = map['default'] = map

/**
 * Map container
 * @param  {Function} fn
 * @param  {Mixed}   val val to map
 * @return {Mixed}   same type as val
 */

function map (fn, val) {
  if (isArray(val)) return mapArray(fn, val)
  if (isObject(val)) return mapObj(fn, val)
  if (supportsGen() && isGenerator(val)) {
    return mapGen(fn, val)
  }
  if (!isUndefined(val) && !isNull(val) && isFunction(val.map)) return val.map(fn)
  throw new TypeError('You may only map an array, an object, a generator, or a functor, but the following `val` was passed: "' + String(val) + '"')
}
