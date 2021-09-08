function solution(weights, h2h){
    const arr = [...weights].map((cur, idx) => cur = [idx + 1, cur]);

    arr.map((cur, idx) => {
        cur[2] = 0;
        h2h.map((cur2, idx2) =>{
            if(h2h[idx].slice(idx2, idx2 + 1) === 'W') {
                cur[2] = cur[2] + 1;
                weights[idx] < weights[idx2] ? cur[2] = cur[2] + 1 : 0;
            }
        })
    })

    arr.sort((a, b) => {
        return a[a.length - 1] > b[b.length - 1] ? -1 : 1;
    });

    // arr[0] 0:선수 번호 1:몸무게 2:승률

    arr.map((cur, idx) => {
        return weights.map((cur2, idx2) =>{
            if(
                (arr[idx][1] > arr[idx2][1]) // 몸무게
                && (idx !== idx2) // 본인 제외
                && (arr[idx][2] === arr[idx2][2])
            ){
                const tmp = arr[idx];
                arr[idx] = arr[idx2];
                arr[idx2] = tmp
            }
        })
    })

    return arr.map((cur, idx) => cur[0]);
}
console.log(solution([50,82,75,120], ["NLWL","WNLL","LWNW","WWLN"]));
// console.log(solution([145,92,86], ["NLW","WNL","LWN"]));
// console.log(solution([60,70,60], ["NNN","NNN","NNN"]));