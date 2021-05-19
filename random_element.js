function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}





/*
O(1) constant time. Accessing an array by index doesn't require any iteration. The computer simply looks at the pointer bound to the array, goes to that memory address, and then grabs the nth element in that array.

*/