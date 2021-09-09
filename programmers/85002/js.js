function solution(weights, h2h){
    
    const all = weights.map((i) => i = h2h[0].split('').filter((a) => a === 'W' || a === 'L').length); // 게임 전체 판 수

    const count = weights.map((i) => i = 0); // 승리한 횟수

    for(let i = 0; i < weights.length; i++){
        for(let j = 0; j < weights.length; j++){
            if(h2h[i].slice(j, j + 1) === 'W' ){
                count[i]++;
            }
        }
    }
    
    const rate = all.map((cur, idx) => count[idx] / cur * 100) // 승률

    // 승률 기준으로 정렬
    const arrObj = Object.entries(Object.assign({}, [...rate])).sort((a, b) => a[a.length - 1] > b[b.length - 1] ? -1 : 1); 
    
    // 승률 같을 때 자신보다 몸무게가 무거운 복서를 이긴 횟수
    for(let i = 0; i < weights.length; i++){
        for(let j = 0; j < weights.length; j++){
            if(
                (arrObj[i][1] === arrObj[j][1]) // 승률이 같음
                && (weights[i] < weights[j]) // 상대 몸무개가 자신보다 큼
                && (h2h[i].slice(j, j + 1) === 'W') // 상대방을 이김
            ){
                const tmp = arrObj[i];
                arrObj[i] = arrObj[j];
                arrObj[j] = tmp
            }
        }
    }

    return arrObj;
    return arrObj.map((cur, idx) => cur = Number(arrObj[idx][0]) + 1);
}
console.log(solution([50,82,75,120], ["NLWL","WNLL","LWNW","WWLN"]));
console.log(solution([145,92,86], ["NLW","WNL","LWN"]));
// console.log(solution([60,70,60], ["NNN","NNN","NNN"]));