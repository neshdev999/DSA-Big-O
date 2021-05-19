function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " + arr[j]);
        }
    }
}

/*

O(n^2) Polynomial time. We loop over the array once for each element in the array. This one is a bit odd because it doesn't loop over the whole array every time. The second loop only performs arr.length / 2 operations.

*/