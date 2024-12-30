function selectionSort(arr) {
    function swap(arr, idx1, idx2) {
        return ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
    }
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (i !== min) {
            swap(arr, i, min);
            // const temp = arr[min];
            // arr[min] = arr[i];
            // arr[i] = temp;
        }
    }
    return arr;
}

console.log(
    selectionSort([34, 67, 20, 2, 36, 10, 1, 3990, 760, 56, 2, 1672, -1])
);
