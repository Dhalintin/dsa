function insertionSort(arr) {
    function swap(arr, idx1, idx2) {
        return ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
    }

    for (var i = 1; i < arr.length; i++) {
        const currVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currVal; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currVal;
    }
    return arr;
}

console.log(insertionSort([3, 5, 6, 7, 4, 7, 3, 7, 10, 13, 65, 68, 6]));
