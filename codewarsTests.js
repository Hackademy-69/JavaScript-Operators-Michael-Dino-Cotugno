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

// function century(num) {
//     return num.splice(2);
// }
// console.log(century(1888));

// function basicOp(operation, value1, value2) {
//     return value1 + +operation + value2;
// }
// console.log("+", 2, 3);

// function fakeBin(x) {
//     let a = x.split("").map((el) => +el);
//     console.log(a);
//     console.log(a.forEach((el) => (el < 5 ? 0 : 1)));
// }

let x = 87753267834;
let a = x
    .toString()
    .split("")
    .map((el) => +el);

console.log(a);

let b = a.map((el) => {
    if (el < 5) {
        return 0;
    } else {
        return 1;
    }
});

let c = a.map((el) => (el < 5 ? 0 : 1));

console.log(b);
console.log(c);

// const reverseSeq = (n) => {
//     let a = [];
//     for (let i = n; i < 0; i--) {
//         a.push(i);
//     }
//     return a;
// };

// let empty = [];
// empty.push(3);
// console.log(empty);
function countDown(ge) {
    let a = [];
    for (let i = ge; i > 0; i--) {
        a.push(i);
    }
    return a;
}
console.log(countDown(4));

function bmi(weight, height) {
    let cal = weight / (height * height);
    switch (true) {
        case cal <= 18.5:
            return "Underweight";
            break;
        case cal <= 25:
            return "Normal";
            break;
        case cal <= 30:
            return "Overweight";
            break;
        default:
            return "Obese";
            break;
    }
}
let hhh = bmi(87, 1.87);
console.log(hhh);

var cubeChecker = function (volume, side) {
    if (volume <= 0) {
        return false;
    } else if (volume == Math.pow(side, 3)) {
        return true;
    } else {
    }
    return false;
};

function barTriang(p1, p2, p3) {
    let bari = [];
    for (let i = 0; i < p1.length; i++) {
        let center = ((p1[i] + p2[i] + p3[i]) / 3).toFixed(4);
        bari.push(center);
    }
    return bari;
}

console.log(barTriang([1, 2], [6, 5], [7, 8]));
