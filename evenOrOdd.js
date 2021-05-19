function isEven(value) {
    if (value % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

/*
Answer:
o(1)


Constant time, because the number of operations doesn't change based on the input
*/