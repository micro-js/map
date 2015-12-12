/**
 * Imports
 */

var map = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.deepEqual(map(add1, [1, 2, 3]), [2, 3, 4])
  t.deepEqual(map(add1, {a: 1, b: 2, c: 3}), {a: 2, b: 3, c: 4})
  t.end()
})

function add1 (n) {
  return n + 1
}
