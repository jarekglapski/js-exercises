// There is an array of numbers: var arr = [1, -2, 3, 4, -9, 6].
// The task is to find contiguous subarray within a one-dimensional array of numbers which has the largest sum.
// You need to return only the sum.

function getMaxSubSum(array) {
    if(array.length == 0) return undefined;
    if(isNaN(array[0])) return NaN;
    var max_to_index = array[0];
    var max = array[0];
    for (var i = 1; i < array.length; i++) {
        max_to_index = Math.max(array[i], max_to_index + array[i]);
        max = Math.max(max, max_to_index);
    }
    return max;
}


console.log(getMaxSubSum([-1, 2, 3, -9])); // 2 + 3 = 5
console.log(getMaxSubSum([2, -1, 2, 3, -9])); // 6
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100
console.log(getMaxSubSum([1, 2, 3])); // 6
console.log(getMaxSubSum([-1, -2, -3])); // -1
console.log(getMaxSubSum([-10, -2, -3])); // -2
console.log(getMaxSubSum([])); // undefined
console.log(getMaxSubSum(['a'])); // NaN
console.log(getMaxSubSum([1,2,'a',3])); // NaN
