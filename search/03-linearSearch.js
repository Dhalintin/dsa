function LinearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
}

const array = [34, 65, 7, 2, 3, 3, 5, 6, 6, 7, 10];

const answer = LinearSearch(array, 6);
console.log(answer);
