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
    const obj = Object.assign({}, [...count]);

    const arrToObj = Object.entries(obj).sort((a, b) => {
        if(a[a.length - 1] > b[b.length - 1]) return -1
        if(a[a.length - 1] < b[b.length - 1]) return 1
        if(a[a.length - 1] == b[b.length - 1]) return 0
    });

    for(let i = 0; i < weights.length; i++){
        for(let j = 0; j < weights.length; j++){
            if(
                (arrToObj[i][1] === arrToObj[j][1]) 
                && (i !== j) 
                // && (weights[i - 1] > weights[j - 1])
            ){
                console.log(arrToObj[i][1], arrToObj[j][1]);
                console.log(weights[i - 1], weights[j + 1]);
            }
        }
    }

    return arrToObj;
}

console.log(solution([50,82,75,120], ["NLWL","WNLL","LWNW","WWLN"]));