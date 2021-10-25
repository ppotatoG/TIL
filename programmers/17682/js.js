function solution(str) {
    const num = new Array(10).fill(0).map((val, idx) => val = idx + 1);
    
    let arr = 
    str.replace(/10/, 'ten')
    .split('')
    .map((val) => Number(val) == val || val === 't' ? val = ' ' + val : val)
    .join('')
    .split(' ')
    .slice(1);
    
    arr = arr.map((val, idx, arr) => {
        let num = Number(val[0]);

        if(val.length === 2) {
            if (val[1] === 'S') return val = num ** 1;
            if (val[1] === 'D') return val = num ** 2;
            if (val[1] === 'T') return val = num ** 3;
        }

        if((val.slice(-1) !== '*' && val.slice(-1) !== '#') && val.slice(0, 3) === 'ten') {
            if (val[3] === 'S') return val = 10 ** 1;
            if (val[3] === 'D') return val = 10 ** 2;
            if (val[3] === 'T') return val = 10 ** 3;
        } 

        else if(typeof(val) === 'string') {
            if(val.slice(-1) === '*'){
                if (val[1] === 'S') return val = 2 * (num ** 1) + '*';
                if (val[1] === 'D') return val = 2 * (num ** 2) + '*';
                if (val[1] === 'T') return val = 2 * (num ** 3) + '*';
            }
            if(val.slice(-1) === '#'){
                if (val[1] === 'S') return val = -1 * (num ** 1);
                if (val[1] === 'D') return val = -1 * (num ** 2);
                if (val[1] === 'T') return val = -1 * (num ** 3);
            }
        }

        else return val;
    })

    for(let i = 0; i < arr.length; i++){
        if(String(arr[i]).slice(-1) === '*') {
            arr[i - 1] *= 2;
            arr[i] = Number(arr[i].slice(0, 1));
        }
    }

    return arr.reduce((a, b) => a + b);
}
console.log(solution('1S2D*3T')); // 1S + 2D* + 3T
console.log(solution('1D2S#10S')); // 1D + 2S# + 10S
console.log(solution('1D2S0T')); // 1D + 2S + 0T