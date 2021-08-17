function solution(num) {
    const arr = String(num).split('');

    arr.sort((a, b) => {
        if(a > b) return -1;
        else if(a < b) return 1;
        else return 0;
    });
    return Number(arr.join(''));
}
console.log(solution(118372))