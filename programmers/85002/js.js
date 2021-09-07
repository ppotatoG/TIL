function solution(weights, h2h){
    const count = [...weights].map((i) => i = 0);

    for(let i = 0; i < weights.length; i++){
        for(let j = 0; j < weights.length; j++){
            // console.log(weights[i] + ' vs ' + weights[j] + ' => ' + h2h[i].slice(j, j + 1))
            if(h2h[i].slice(j, j + 1) === 'W'){
                // win
                count[i]++;
                if(weights[i] < weights[j]){
                // 몸무게가 큰 이긴 횟수
                    count[i]++;
                }
            }
        }
    }
    const obj = Object.assign({}, [...count]);

    const arrObj = Object.entries(obj).sort((a, b) => {
        if(a[a.length - 1] > b[b.length - 1]) return -1
        if(a[a.length - 1] < b[b.length - 1]) return 1
        if(a[a.length - 1] == b[b.length - 1]) return 0
    });

    for(let i = 0; i < weights.length; i++){
        for(let j = 0; j < weights.length; j++){
            if(
                (arrObj[i][1] === arrObj[j][1]) 
                && (i !== j) 
                && (weights[arrObj[i][0]] > weights[arrObj[j][0]])
            ){
                const tmp = arrObj[i];
                arrObj[i] = arrObj[j];
                arrObj[j] = tmp
            }
        }
    }

    return arrObj.map((cur, idx) => cur = Number(arrObj[idx][0]) + 1);
}

console.log(solution([50,82,75,120], ["NLWL","WNLL","LWNW","WWLN"]));
console.log(solution([145,92,86], ["NLW","WNL","LWN"]));
console.log(solution([60,70,60], ["NNN","NNN","NNN"]));