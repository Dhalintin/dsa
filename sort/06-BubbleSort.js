function bubbleSort(arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }

    return arr;
}

console.log(
    bubbleSort([
        5, 6, 7, 2, 3, 46, -100, 100, 4.3, 7, 9, 7, 20, 4, 20, 49, 12, 11, 320,
        40,
    ])
);
