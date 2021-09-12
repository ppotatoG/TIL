function solution(weights, h2h){
    
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

    return arr.sort((a, b) => {
        if(a[0] > b[0]) return -1;
        if(a[0] < b[0]) return 1;

        if(a[1] > b[1]) return -1;
        if(a[1] < b[1]) return 1;

        if(a[2] > b[2]) return -1;
        if(a[2] < b[2]) return 1;
        
        if(a[3] > b[3]) return -1;
        if(a[3] < b[3]) return 1;

    }).map((cur) => cur[3]);
}
console.log(solution([50,82,75,120], ["NLWL","WNLL","LWNW","WWLN"]));
// console.log(solution([145,92,86], ["NLW","WNL","LWN"]));
// console.log(solution([60,70,60], ["NNN","NNN","NNN"]));