function solution(num) {
    let arr = num.filter((a, b) => num.indexOf(a) === b);
    while(arr.length > num.length/2) arr.pop();

    return arr.length;
}
console.log(solution([3,1,2,3]))
console.log(solution([3,3,3,2,2,4]))
console.log(solution([3,3,3,2,2,2]))