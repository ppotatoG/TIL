# 알고리즘 복습

[12928](https://programmers.co.kr/learn/courses/30/lessons/12928)
```js
function solution12928(n) {
    let answer = 0;

    for(let i = 0; i <= n; i++){
        n % i === 0 ? answer += i : 0;
    } 

    return answer;
}

console.log(solution12928(12)) // 28
console.log(solution12928(5)) // 6
```

[12930](https://programmers.co.kr/learn/courses/30/lessons/12930)
```js
function solution12930(str) {
    let arr = str.split(' ');

    return arr.map((val, idx) => {
        return val.split('').map((val2, idx2) => {
            return (idx2 + 2) % 2 === 0 ? val2.toUpperCase() : val2.toLowerCase(); 
        }).join('');
    }).join(' ');
}

console.log(solution12930('try hello world')) // "TrY HeLlO WoRlD"
```

[12931](https://programmers.co.kr/learn/courses/30/lessons/12931)
```js
function solution12931(n) {
    return Number((n+'')
    .split('')
    .reduce((a, b) =>  Number(a) + Number(b)))
}

console.log(solution12931(123)) // 6
console.log(solution12931(987)) // 24
console.log(solution12931(0)) // 24
```

[12932](https://programmers.co.kr/learn/courses/30/lessons/12932)
```js
function solution12932(n) {
    return (n+'').split('').reverse().map((val) => Number(val));
}

console.log(solution12932(12345)) // 
```


[12933](https://programmers.co.kr/learn/courses/30/lessons/12931)
```js
function solution12933(n) {
    return Number((n+'').split('').sort().reverse().join(''));
}

console.log(solution12933(118372)) // 
```

[12934](https://programmers.co.kr/learn/courses/30/lessons/12934)
```js
function solution12934(n) {
    return Number.isInteger(Math.sqrt(n)) ? Math.pow(Math.sqrt(n) + 1, 2) : -1
}

console.log(solution12934(121)) // 144
console.log(solution12934(3)) // -1
```

[12935](https://programmers.co.kr/learn/courses/30/lessons/12935)
```js
function solution12935(arr) {
    return arr.length === 1 ? [-1] : arr.filter((val) => val !== Math.min.apply(null, arr));
}

console.log(solution12935([4,3,2,1])) // [4, 3, 2]
console.log(solution12935([10])) // -1
```