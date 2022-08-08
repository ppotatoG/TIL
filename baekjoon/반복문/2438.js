const fs = require('fs'); 

const length = fs.readFileSync('예제.txt').toString().trim();
for(let i = 1; i <= length; i++) {
    console.log('*'.repeat(i));
}