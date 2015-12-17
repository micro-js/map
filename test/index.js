/**
 * Imports
 */

var map = require('..')
var test = require('tape')
var supportsGen = require('@f/supports-gen')

/**
 * Tests
 */

test('should work with arrays, objects and generators', function (t) {
  if (supportsGen()) {
    t.plan(3)
  } else {
    t.plan(2)
  }

  t.deepEqual(map(add1, [1, 2, 3]), [2, 3, 4])
  t.deepEqual(map(add1, {a: 1, b: 2, c: 3}), {a: 2, b: 3, c: 4})
  if (supportsGen()) {
    eval('t.deepEqual(Array.from(map(add1, function * () {yield 1; yield 2; yield 3})()), [2, 3, 4])')
  }
})



test('should work with functor', function (t) {
  var f = new Functor([1, 2, 3])
  t.deepEqual(map(add1, f), [2, 3, 4])
  t.end()
})

test('should handle undefined gracefully', function (t) {
  t.equal(map(add1), undefined)
  t.end()
})

function add1 (n) {
  return n + 1
}

function Functor (data) {
  this.data = data
}

Functor.prototype.map = function (fn) {
  return this.data.map(fn)
}
