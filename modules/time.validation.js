const moment = require('moment-timezone');

/**
 * If the timestamp is within 30 seconds of the current
 * time, return true. Otherwise, return false.
 * 
 * Input '2020-07-01T16:03:18.021Z' -> output: depends on current time (true or false)
 * 
 * @param {String} timestamp
 * @returns {Boolean} whether the timestamp is within 30 seconds of now
 */
function closeToNow(timestamp) {
    let thirtySecsBeforeMoment = moment().subtract(30, 's');
    let thirtySecsAfterMoment = moment().add(30, 's');
    //isBetween method checks if moment is between two other moments 
    if (moment(timestamp).isBetween(thirtySecsBeforeMoment, thirtySecsAfterMoment, 'seconds')) {
        return true
    } else {
        return false
    }
}

/**
 * Returns the previous days date if before 12pm CST or the
 * date of the timestamp if after 12pm CST. 
 * 
 * Input: '2020-07-01T16:03:18.021Z' -> output: '2020-06-30', 
 * Input: '2020-07-01T17:03:18.021Z' -> output: '2020-07-01'
 * Input: '2020-07-01T12:03:18.021-05:00' -> output: '2020-07-01'
 * 
 * @param {String} timestamp 
 * @returns {String} calulated date in the format 'YYYY-MM-DD'
 */
function closestDate(timestamp) {
    //converts timezone to CST and formats in hour
    timeStampCST = moment(timestamp).tz('America/Chicago').format('H')
    //converts timezone to CST, subtracts one day, and formats correctly
    dayBefore = moment(timestamp).tz('America/Chicago').subtract(1, 'd').format("YYYY-MM-DD");
    //converts timezone to CST and formats correctly 
    dayOf = moment(timestamp).format("YYYY-MM-DD");
    if (timeStampCST < 12) {
        return dayBefore;
    } else {
        return dayOf;
    }
  
}

/**
 * Takes in a timestamp and timezone, returns a string formatted for
 * that timezone. https://momentjs.com/timezone/
 *
 * Input: '2020-07-01T16:03:18.021Z', 'US/Central' -> output: 'July 1st, 2020 at 11:03 am'
 *
 * @param {String} timestamp
 * @returns {String} calulated date in the format 'MMMM Do, YYYY [at] h:mm a'
 */
function formatTimestamp(timestamp, timezone) {
    // YOUR CODE HERE
}

module.exports = {
    closeToNow,
    closestDate,
    formatTimestamp,
}