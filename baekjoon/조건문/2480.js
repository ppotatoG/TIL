const fs = require('fs'); 

let [A, B, C] = fs.readFileSync('예제.txt').toString().split(' ').map(Number);

const solution = (A, B, C) => {
    if(A === B && A === C && B === C) return console.log(10000+A*1000)
    
    if(A !== B || A !== C || B !==C ) {
        if(A === B  ||  A === C) return console.log(1000+(A*100));
        if(B === C) return console.log(1000+(B*100));
    }

    if(A !== B && A !== C && B !==C ) return console.log([A, B, C].sort()[2]*100);
}

solution(A, B, C);