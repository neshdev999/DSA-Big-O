function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

/*

O(n) Linear time. As the array grows, we perform one extra operation for each new element.
*/