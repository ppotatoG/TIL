function solution(a, b) {
    a.sort((a, b) => a - b);
    b.sort((a, b) => b - a);
    
    return a.map((val, idx) => val = val * b[idx]).reduce((a, b) => a + b);
}
console.log(solution([1, 4, 2], [5, 4, 4])); 
console.log(solution([1, 2], [3, 4])); 

// 5 16 8
// 4 8 20