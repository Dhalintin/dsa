function pivotHelper(arr, start = 0, end = arr.length - 1) {
    function swap(arr, idx1, idx2) {
        return ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
    }
    let pivot = start;

    for (let i = start + 1; i < arr.length; i++) {
        if (arr[start] > arr[i]) {
            pivot++;
            swap(arr, pivot, i);
        }
    }
    swap(arr, pivot, start);
    return pivot;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivotHelper(arr, left, right);

        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

console.log(quickSort([6, 29, 7, 8, 3, 23, 5, 2, 9, 10, 50, 6]));
