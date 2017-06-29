'use strict'

// returns an array from start (inclusive) to end (exclusive)
const range =
  (start, end) => { // loops allowed
    let array = []
    for (var i = start; i < end; i++) {
      array.push(i)
    }
    return array
  }

const config = [
  [3, 'Fizz'],
  [5, 'Buzz']
]

const fizzbuzz =
  (range, config) => { // no loops allowed
    let y = range.map((x) => {
      if (x % config[0][0] === 0 && x % config[1][0] === 0) {
        return config[0][1] + config[1][1]
      } else if (x % config[0][0] === 0) {
        return 'Fizz'
      } else if (x % config[1][0] === 0) { return 'Buzz' }
    })
    console.log(y)
  }

fizzbuzz(range(1, 115), config)
