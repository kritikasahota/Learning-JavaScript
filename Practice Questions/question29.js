//Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers.
const arrayAverage = (nums) => {
    let n = nums.length;
    let sum = 0;
    for(let i = 0; i < n; i++){
        sum += nums[i];
    }

    return sum / n;
}

let nums = [1, 2, 3, 4, 5, 6];
console.log(arrayAverage(nums));

