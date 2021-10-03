function solution(weights, h2h){
    // [이긴 횟수, 나보다 무거운 사람을 이긴 횟수, 몸무게, 선수 번호]
    const arr = weights.map((cur, idx) => {
        return [0, 0, cur, idx + 1];
    })

    for(let i = 0; i < weights.length; i++){
        for(let j = 0; j < weights.length; j++){
            if(h2h[i][j] === 'W'){
                arr[i][0]++; 
                if(weights[i] < weights[j]) {
                    arr[i][1]++; 
                }
            }
        }
    }

    arr.map((cur, idx) => cur[0] = h2h[idx].split('').filter((a) => a !== 'N').length ? cur[0] / h2h[idx].split('').filter((a) => a !== 'N').length : 0); 

    return arr.sort((a, b) => {
        if(a[0] !== b[0]) return b[0] - a[0];
        if(a[1] !== b[1]) return b[1] - a[1];
        if(a[2] !== b[2]) return b[2] - a[2];
        else return a[3] - b[3];
    });
}
// console.log(solution([50,82,75,120], ["NLWL","WNLL","LWNW","WWLN"]));
console.log(solution([145,92,86], ["NLW","WNL","LWN"]));
// console.log(solution([60,70,60], ["NNN","NNN","NNN"]));