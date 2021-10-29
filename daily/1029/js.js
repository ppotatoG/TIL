function solution12919(arr) {
    return `김서방은 ${arr.indexOf('Kim')}에 있다`
}

console.log(solution12919(["Jane", "Kim"])) // 

// ----------------------

function solution12921(num) {
    const arr = new Array(num - 1).fill(0).map((val, idx) => val = idx + 2);
    let answer = new Array(num - 1).fill(0);

    for(let i = 0; i < arr.length; i++){
        for(let k = 2; k <= arr[i]; k++){
            if(arr[i] % k === 0) answer[i] ++;
        }
    }

    return answer.filter((val) => val === 1).length;
}

console.log(solution12921(10)) // 4
console.log(solution12921(5)) // 3

// ----------------------

function solution12922(num) {
    return '수박'.repeat(Math.round(num / 2)).substr(0, num);
}

console.log(solution12922(3)) // 4
console.log(solution12922(4)) // 3

// ----------------------

function solution12926(str, n) {
    let arr = str.split('').map((val) => val = Number(val.charCodeAt()));

    return arr.map((val) => {
        let num = val + n;
        if(val === 32) return String.fromCharCode(32);
        if(val > 90) {
            if(num >= 123) num -= 26;
            return String.fromCharCode(num);
        }
        else {
            if(num >= 91) num -= 26;
            return String.fromCharCode(num);
        }
    }).join('');
}

// console.log(solution12926('AB', 1)) // BC
// console.log(solution12926('z', 1)) // a
// console.log(solution12926('a B z', 4)) // e F d
console.log(solution12926('yz', 1)); // za
console.log(solution12926('z', 2)); // b
console.log(solution12926('Aa Z z', 2)); // Cc B b