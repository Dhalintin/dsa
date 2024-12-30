function getDigit(num, pos) {
    // const newNum = num.toString();
    // return parseInt(newNum[newNum.length - 1 - pos]);

    return Math.floor(Math.abs(num / Math.pow(10, pos)) % 10);
}

function digitCount(num) {
    // return num.toString().length;
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigit(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        const digit = digitCount(arr[i]);
        if (count < digit) count = digit;
    }
    return count;

    /*let maxDigit = 0;
    for (let i = 0; i < arr.length; i++) {
        maxDigit = Math.max(maxDigit, digitCount(arr[i]));
        if (count < digit) count = digit;
    }
    return maxDigit;*/
}

function radixSort(nums) {
    let maxDigitCount = mostDigit(nums);
    for (let k = 0; k < maxDigitCount; k++) {
        var digitBuckets = Array.from({ length: 10 }, () => []);
        // let digitBuckets = [[], [], [], [], [], [], [], [], [], []];
        for (let i = 0; i < nums.length; i++) {
            let posDigit = getDigit(nums[i], k);
            digitBuckets[posDigit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

console.log(radixSort([1234, 5674, 7, 83, 293, 10934]));
