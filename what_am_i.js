function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}

/*

If the number is less than two, or if the number is not an integer, return false. If the number is evenly divisible by any number between 2 and itself, return false. So the function will return true only if the number passed to it is a prime number. The Big O is linear, O(n). As the input grows, the number of operations performed by the for loop grows at the same rate.

*/