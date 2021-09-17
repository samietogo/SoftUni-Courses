function gcd(a, b) {
    for (let i = a; i >= 1; i--) {
        if (a % i == 0 && b % i == 0) {
            return i;
        }
    }
}

console.log(gcd(2154, 458));