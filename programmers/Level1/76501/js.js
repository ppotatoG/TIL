function solution(a, s) {
    return a.reduce((a, c, i) => a + ' ' + c  + ' ' + i);
    // return a.map((c, i) => s[i] === false? a[i] *= -1 : a[i]).reduce((a, b) => a + b);
}
console.log(solution([4,7,12], [true,false,true]));
console.log(solution([1,2,3], [false,false,true]));