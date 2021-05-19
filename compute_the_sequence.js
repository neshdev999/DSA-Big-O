function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        } else if (i === 2) {
            result.push(1);
        } else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}

/*
O(n) Linear time. Adds the previous two answers together, creating a fibbonacci sequence.

*/