function lastKNumberSequence(n, k) {
    const result = [1];
    for (let i = 1; i < n; i++) {
        let current = 0;
        let start = Math.max(0, i - k);
        for (let j = start; j < i; j++) {
            current += result[j];
        }
        result.push(current);
    }

    return result;
}

console.log(lastKNumberSequence(6, 3));
console.log(lastKNumberSequence(8, 2));