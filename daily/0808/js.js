// function solution(s){
//     return s.split('').sort().reverse().join('');
// }

// console.log(solution("Zbcdefg"));

// function solution(s){
//     const regex = /[0-9]/g;
//     return s.match(regex).length == 4 || s.match(regex).length == 6 ? true : false;
// }

// console.log(solution("a234"));
// console.log(solution("1234"));

// x, x + z
function solution(a, b){
    let arr = [];
    for(let i = 1; i < b + 1; i ++){
        arr.push(a * i)
    }
    return arr
}

console.log(solution(2, 5));
