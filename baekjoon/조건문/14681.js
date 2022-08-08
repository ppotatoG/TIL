const fs = require('fs'); 

const [A, B] = fs.readFileSync('예제.txt').toString().split('\n').map(v=>Number(v));

if(A>0)B>0?console.log(1):console.log(4);
else B<0?console.log(3):console.log(2);