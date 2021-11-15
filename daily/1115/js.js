function solution12954(x, n) {
    return new Array(n).fill(x).map((val, idx) => val *= idx + 1);
}

console.log(solution12954(2, 5));
console.log(solution12954(4, 3));

/*-----------------*/ 

function solution42746(arr) {
    arr = arr.sort((a, b) => {
        if(`${a}` + `${b}` < `${b}` + `${a}`) return 1
        else if(`${a}` + `${b}` > `${b}` + `${a}`) return -1
        else return 0
    });

    return arr[1] === 0 ? String(0) : arr.join('');
}

console.log(solution42746([0, 0, 0, 0]));
console.log(solution42746([0]));
console.log(solution42746([40, 404])); // 40404, 40440
console.log(solution42746([30, 34, 3])); // [34, 3, 30]

/*-----------------*/ 
