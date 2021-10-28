function solution1845(arr) {
    const answer = [...arr].filter((a, b) => [...arr].indexOf(a) === b).length;
    return answer < arr.length / 2 ? answer : arr.length / 2;
}

console.log(solution1845([3,1,2,3])) // 3
console.log(solution1845([3,3,3,2,2,4])) // 3
console.log(solution1845([3,3,3,2,2,2])) // 2

// ----------------------

function solution12903(str) {
    return str.length % 2 == 0 ? str.substr((str.length / 2) - 1, 2) : str.substr(str.length / 2, 1);

}
console.log(solution12903('abcde')) // c
console.log(solution12903('qwer')) // we

// ----------------------

function solution12906(arr) {
    return arr.filter((val, idx, array) => val != array[idx + 1]);
}
console.log(solution12906([1,1,3,3,0,1,1])) // [1,3,0,1]

// ----------------------

function solution12910(arr, div) {
    arr = arr.sort((a, b) => a - b).filter((val) => val % div == 0)
    return arr.length === 0 ? [-1] : arr;
}
console.log(solution12910([5, 9, 7, 10], 5)) // [5, 10]
console.log(solution12910([2, 36, 1, 3], 1)) // [1, 2, 3, 36]
console.log(solution12910([3,2,6], 10)) // -1

// ----------------------

function solution12912(a, b) {
    return new Array(Math.max(a, b) - Math.min(a, b) + 1)
    .fill(0)
    .map((val, idx) => val = Math.min(a, b) + idx)
    .reduce((a, b) => a + b);
}
console.log(solution12912(3, 5)) // 12 
console.log(solution12912(3, 3)) // 3 
console.log(solution12912(5, 3)) // 12

// ----------------------

function solution12915(arr, num) {
    return arr.sort((a, b) => {
        if(a[num] > b[num]) return 1;
        if(a[num] < b[num]) return -1;

        if(a > b) return 1;
        if(a < b) return -1;

        else return 0;
    })
}
console.log(solution12915(["sun", "bed", "car"], 1)) // ["car", "bed", "sun"]
console.log(solution12915(["abce", "abcd", "cdx"], 2)) // ["abcd", "abce", "cdx"]

// ----------------------

function solution12916(str) {
    str = str.toUpperCase();
    const p = str.split('').filter((a) => a === 'P');
    const y = str.split('').filter((a) => a === 'Y');
    
    return p.length === y.length;
}
console.log(solution12916('pPoooyY')) // true
console.log(solution12916('Pyy')) // true

// ----------------------

function solution12917(str) {
    let arr = str.split('');
    arr = arr.map((val) => Number(val) == val).filter((val) => val === true);
    
    return (str.length === 4 || str.length === 6) && arr.length === str.length;
}
console.log(solution12917('a234')) // false
console.log(solution12917('1234')) // true