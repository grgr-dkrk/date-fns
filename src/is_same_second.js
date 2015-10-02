var startOfSecond = require('./start_of_second')

/**
 * Aare the given dates in the same second?
 * @param {Date|String|Number} dirtyDateLeft - the first date to check
 * @param {Date|String|Number} dirtyDateRight - the second date to check
 * @returns {Boolean} the dates are in the same second
 */
var isSameSecond = function(dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfSecond = startOfSecond(dirtyDateLeft)
  var dateRightStartOfSecond = startOfSecond(dirtyDateRight)

  return(
    dateLeftStartOfSecond.getTime() == dateRightStartOfSecond.getTime()
  )
}

module.exports = isSameSecond
