// function positiveSum(arr) {
//     return arr.filter((el) => el >= 0).reduce((acc, n) => acc + n);
// }
function positiveSum(arr) {
    if (arr.length != 0 && arr.every((el) => typeof el == "number")) {
        return arr.filter((el) => el >= 0).reduce((acc, n) => acc + n);
    } else {
        return 0;
    }
}
console.log(positiveSum(["lask"]));

function solution(str) {
    return str.split("").reverse().join("");
}
console.log(solution("hey you"));

function boolToWord(bool) {
    if (bool == true) {
        return "Yes";
    } else {
        return "No";
    }
}

console.log(boolToWord(4 == 8));

function removeChar(str) {
    return str
        .split("")
        .filter((el, i) => i > 0 && i < str.length - 1)
        .join("");
}

console.log(removeChar("My name is Tom."));

function repeatStr(n, s) {
    return s.repeat(n);
}
console.log(repeatStr(6, "lo"));

function squareSum(numbers) {
    return numbers.reduce((acc, n) => n * n + acc, 0);
}
console.log(squareSum([4, 5, 6]));

var summation = function (num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;
};
console.log(summation(8));

function century(num) {
    return num.splice(2);
}
console.log(century(1888));

function basicOp(operation, value1, value2) {
    return value1 + +operation + value2;
}
console.log("+", 2, 3);
