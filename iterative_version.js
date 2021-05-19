// 1.
function countSheep(n) {
    let counter = n;

    while (n > 0) {
        console.log(`${n}: Another sheep jumps over the fence`);
        n--;
    }

    console.log(`All sheep jumped over the fence`);
}
// O(n) linear. We add one step for each additional sheep.

// 2.
function powerCalculator(base, exponent) {
    result = base;
    while (exponent > 1) {
        result *= base;
        exponent--;
    }
    return result;
}
// O(n) linear. We add one step for each additional number in the exponent.

// 3.
function reverseString(string) {
    let newString = '';

    for (let i = string.length - 1; i >= 0; i--) {
        newString += string.charAt(i)
    }

    return newString;
}
// O(n). For each char we add, our for loop iterates one more time.

// 4.
function nthTriangularNumber(n) {
    let result = 1;

    for (let i = 1; i < n; i++) {
        result += i + 1;
    }

    return result;
}
// O(n). Basically because we have a for loop that goes until n.

// 5.
function stringSplitter(string, splitter) {
    let result = []

    while (string.indexOf(splitter) >= 0) {
        let splitterIndex = string.indexOf(splitter);

        result.push(string.substring(0, splitterIndex));
        string = string.substring(splitterIndex + 1);
    }
    result.push(string) // Get our last section of string into the array after the splitter is no longer present.

    return result;
}
// O(n) where n is the number of splitter chars in the string.

// 6.
function fibonacci(n) {
    if (n <= 2) { return 1 }

    let counter = n;
    let result;
    let firstPrevious = 1;
    let secondPrevious = 1;

    while (counter > 0) {
        result = firstPrevious + secondPrevious;

        secondPrevious = firstPrevious;
        firstPrevious = result;

        counter--;
    }

    return result;
}
// O(n)


// 7.
function factorial(n) {
    let result = 1;
    for (let i = n; i > 0; i--) {
        result *= i;
    }
    return result;
}
// O(n)