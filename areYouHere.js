function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}

/*
O(n^2) Polynomial Time.
or O(n*m)
For each n element in arr1 we have to perform k operations in arr2.

*/