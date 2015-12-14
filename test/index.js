/**
 * Imports
 */

var map = require('..')
var test = require('tape')
var supportsGen = require('@micro-js/supports-gen')

/**
 * Tests
 */

test('should work', function (t) {
  t.deepEqual(map(add1, [1, 2, 3]), [2, 3, 4])
  t.deepEqual(map(add1, {a: 1, b: 2, c: 3}), {a: 2, b: 3, c: 4})
  if (supportsGen()) {
    t.deepEqual(Array.from(map(add1, function * () {yield 1; yield 2; yield 3})()), [2, 3, 4])
  }
  t.end()
})

function add1 (n) {
  return n + 1
}
