const solution = ( n, lighthouse ) => {
    return lighthouse.sort((a, b) => a[0] - b[0])
}

// console.log(solution(8, [[1, 2], [1, 3], [1, 4], [1, 5], [5, 6], [5, 7], [5, 8]]));
console.log(solution(10, [[4, 1], [5, 1], [5, 6], [7, 6], [1, 2], [1, 3], [6, 8], [2, 9], [9, 10]]));