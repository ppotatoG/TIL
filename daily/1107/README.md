# 알고리즘 복습

[12943](https://programmers.co.kr/learn/courses/30/lessons/12943)
```js
function solution12943(n) {
    let count = 0;
    // 중복문을 돌며 ++해줄 값 생성

    while(n !== 1 && count < 500){
        // n이 1이면, count기 500이상이면 종료
        
        n % 2 == 0 ? n = n / 2 : n = n * 3 + 1 ; 
        // n이 짝수일 땐 /2, 홀수일 땐 * 3 + 1

        count ++;
        // 반복마다 count++
    }

    return n === 1 ? count : -1;
    // n이 1이 아니면 count가 500이상이기 때문에 -1 반환
}
```

[12944](https://programmers.co.kr/learn/courses/30/lessons/12944)
```js
function solution12944(n) {
    return num.reduce((a, b) => a + b) / num.length;
    // n을 모두 더한 후, n의 길이로 나누기
}
```

[12947](https://programmers.co.kr/learn/courses/30/lessons/12947)
```js
function solution12947(n) {
    const sum = 
    (n+'') // 을 문자열로 바꿔준 후
    .split('') // 문자열을 배열로 잘라주기
    .reduce((a, b) => Number(a) + Number(b)); // 배열의 모든 값을 더해줌

    return n % sum === 0; // 짝수와 홀수인지로 불리언값으로 반환
}

console.log(solution12947(10)) // true
console.log(solution12947(12)) // true
console.log(solution12947(11)) // false
console.log(solution12947(13)) // false
```

[12948](https://programmers.co.kr/learn/courses/30/lessons/12948)
```js
function solution12948(phone) {
    return ('*').repeat(phone.length - 4) + phone.slice(-4);
    // '*'을 phone.length - 4만큼 반복 후, phone의 뒤에 4자리 합치기
}

console.log(solution12948('01033334444')) //
console.log(solution12948('027778888')) // 
```

[12950](https://programmers.co.kr/learn/courses/30/lessons/12950)
```js
function solution12950(arr1, arr2) {
    let arr = [...arr1];
    // 받아올 함수와 같은 배열 만들어주기

    for(let i = 0; i < arr1.length; i++){
        for(let k = 0; k < arr1[i].length; k++) {
            // 배열 내 배열을 돌며 더해준 값을 넣어주기
            arr[i][k] = arr1[i][k] + arr2[i][k];
        }   
    }

    return arr;
}
```