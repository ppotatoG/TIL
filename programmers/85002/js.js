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
                    if(count[i] === count[j]) {
                        console.log(count[i] + ' + ' + count[j]);
                    }
                }
            }
        }
    }

    console.log([...count].sort().reverse());

    return count;
}

console.log(solution([50,82,75,120], ["NLWL","WNLL","LWNW","WWLN"]));