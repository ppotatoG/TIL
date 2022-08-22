const solution = ( d, s, t ) => {
    s = s.map(v=>v.sort((a, b) => a - b));
    t = t.map(v=>v.sort((a, b) => a - b));

    let answer = 0;

    while(answer < d) {
        const curScope = s.map(v=>v[0] <= answer && answer <= v[1]).findIndex(v=>v===true);
        const curTime = t.map(v=>v[0] <= answer && answer <= v[1]).findIndex(v=>v===true);

        console.log(answer + '번째')
        console.log(curScope)
        console.log(curTime)

        answer ++;
    }

    return answer;
}

console.log(solution(10, [[3, 4], [5, 8]], [[2, 5], [4, 3]]));
// console.log(solution(12, [[7, 8], [4, 6], [11, 10]], [[2, 2], [2, 4], [3, 3]]));