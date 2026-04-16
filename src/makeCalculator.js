'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  return {
    result: 0,

    reset: function () {
      this.result = 0;
      return this;  
    },

    add: (a, b) => a + b,

    subtract: (a, b) => a - b,

    multiply: (a, b) => a* b,

    divide: (a, b) => a / b,

    operate: function (callback, value) {
      this.result = callback(this.result, value);
      return this;
    }
  }
}

module.exports = makeCalculator;
