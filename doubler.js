function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

/*

O(n) Linear time. We perform one operation per element in the array, so our operations grow at the same rate as the input.
*/