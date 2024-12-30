function merge(first, second) {
    const sortedArr = [];
    let i = 0;
    let j = 0;
    while (i < first.length && j < second.length) {
        if (first[i] < second[j]) {
            sortedArr.push(first[i]);
            i++;
        } else {
            sortedArr.push(second[j]);
            j++;
        }
    }
    while (i < first.length) {
        sortedArr.push(first[i]);
        i++;
    }

    while (j < second.length) {
        sortedArr.push(second[j]);
        j++;
    }

    return sortedArr;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const middle = Math.floor(arr.length / 2);
    const newArr1 = mergeSort(arr.slice(0, middle));
    const newArr2 = mergeSort(arr.slice(middle));
    return merge(newArr1, newArr2);
}

console.log(mergeSort([1, 3, 5, 7, 2, 4, 6, 8, 9]));
