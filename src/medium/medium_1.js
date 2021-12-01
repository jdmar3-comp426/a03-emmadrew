import { getIncreasingArray } from "../mild/mild_1.js";
import {variance} from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
    let counter = 0;
    for (let i=0; i < array.length; i++) {
        counter += array[i];
    }
    return counter;
}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
    array.sort((a, b) => a - b);
    let size = array.length;
    if (size%2!==0) {
        return array[size/2];
    } else {
        let lowVar=array[(size/2) - 1];
        let highVar=array[size/2];
        return (highVar+lowVar)/2;
    }
}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
    let returnObj = new Object;
    var sortedArray = array.sort((a, b) => a - b);
    returnObj.length = array.length;
    returnObj.sum = getSum(array);
    returnObj.mean = returnObj.sum/returnObj.length;
    returnObj.median = getMedian(array);
    returnObj.min = sortedArray[0];
    returnObj.max = sortedArray[array.length - 1];

    var mean = returnObj.sum/returnObj.length;
    var variance = 0;
    for (let i = 0; i < returnObj.length; i++) {
        variance += (returnObj[i] - mean)^2;
    }
    returnObj.variance = variance/(returnObj.length-1);
    returnObj.standard_deviation = variance^(1/2);
    
    return returnObj;
}

