[11382](https://www.acmicpc.net/problem/11382) 번 문제 기준
```node
const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim();

console.log(input.split(' ').reduce((a, c) => a += Number(c), 0));
```
