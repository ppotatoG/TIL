function solution(arr) {
    arr.map((val) => val.sort((a, b) => a - b));
    return Math.max.apply(Math, arr.map((val) => val[0])) * Math.max.apply(Math, arr.map((val) => val[1]));
}
console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]])); // 60, 70, 60, 80