function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor(arr.length / 2);

    while (arr[middle] !== val && left <= right) {
        if (arr[middle] > val) right = middle - 1;
        else left = middle + 1;

        middle = Math.floor((left + right) / 2);
    }

    return arr[middle] === val ? middle : -1;
}

const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 33,
    35, 42, 45, 47, 49, 50, 56, 58, 63, 75,
];
console.log(binarySearch(arr, 50));
