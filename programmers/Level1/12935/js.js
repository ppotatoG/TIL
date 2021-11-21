function solution(num) {
    let min = Math.min(...num);

    num.splice(num.indexOf(min), 1);
    
    return num.length == 0? [-1] : num;
}

console.log(solution([3,7,1,5, 1, 7, 1]));
console.log(solution([10]));