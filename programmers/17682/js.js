function solution(str) {
    let arr = 
    str.split('') 
    .map((val) => {
        return Number(val) == val ? val = ' ' + val : val 
    })
    .join('')
    .split(' ')
    .slice(1);
    
    arr = arr.map((val) => {
        let num = Number(val[0]);

        if(val.length === 2) {
            if (val[1] === 'S') return val = num ** 1;
            if (val[1] === 'D') return val = num ** 2;
            if (val[1] === 'T') return val = num ** 3;
        }

        else return val;
    })

    return arr
}
console.log(solution('1S2D*3T')); // 1S + 2D* + 3T
console.log(solution('1D2S#10S')); // 1D + 2S# + 10S
console.log(solution('1D2S0T')); // 1D + 2S + 0T