function solution(num) {
    console.log(String(num[2]).slice(0, 1))
    
    return num.sort((a, b) => {
        if(String(a).slice(0, 1) > String(b).slice(0, 1)) return 1;
        if(String(a).slice(0, 1) < String(b).slice(0, 1)) return -1;

        if(String(a).length < String(b).length) return 1;
        if(String(a).length > String(b).length) return -1;

        return 0
    }).reverse().join(' ');
}
console.log(solution([6, 10, 2]));
console.log(solution([3, 30, 34, 5, 9]));

// 9 5 34 3 30