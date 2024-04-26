function removeNb(n) {
    const sum = (n * (n + 1)) / 2;
    const pairs = [];

    for (let a = 1; a <= n; a++) {
        const numerator = sum - a;
        const denominator = a + 1;
        const b = numerator / denominator;

        if (Number.isInteger(b) && b >= 1 && b <= n && a !== b) {
            pairs.push([a, b]);
        }
    }

    return pairs;
}