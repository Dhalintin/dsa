function stringSearch(lngStr, pat) {
    let count = 0;
    for (let i = 0; i < lngStr.length; i++) {
        for (let j = 0; j < pat.length; j++) {
            if (lngStr[i + j] !== pat[j]) break;
            if (j === pat.length - 1) count++;
        }
    }

    return count;
}

console.log(stringSearch("Stealing is a crime", "Crime"));
