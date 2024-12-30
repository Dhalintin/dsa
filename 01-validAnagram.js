function validAnagram(a, b) {
    if (a.length !== b.length) return false;

    const firstSet = {};
    const secondSet = {};

    for (let val of a) {
        const smVal = val.toLowerCase();
        firstSet[smVal] = ++firstSet[smVal] || 1;
    }
    for (let val of b) {
        const smVal = val.toLowerCase();
        if (!firstSet[smVal]) return false;
        secondSet[smVal] = ++secondSet[smVal] || 1;
    }

    for (let fVal in firstSet) {
        if (firstSet[fVal] !== secondSet[fVal]) return false;
    }
    return true;
}

const value = validAnagram("SA", "AS");

console.log(value);
