/**
 * Modules
 */

var isArray = require('@micro-js/is-array')
var isObject = require('@micro-js/is-object')
// var isGenerator = require('@micro-js/is-generator')
var mapArray = require('@micro-js/map-array')
var mapObj = require('@micro-js/map-obj')
// var mapGen = require('@micro-js/map-gen')

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
  //if (isGenerator(val)) return mapGen(fn, val)
}
