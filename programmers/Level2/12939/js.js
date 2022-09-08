const solution = str => {
    const min = Math.min.apply(null, str.split(' '));
    const max = Math.max.apply(null, str.split(' '));
    return `${min} ${max}`;
}
console.log(solution("1 2 3 4"));
console.log(solution("-1 -2 -3 -4"));
console.log(solution("-1 -1"));

// 5 16 8
// 4 8 20