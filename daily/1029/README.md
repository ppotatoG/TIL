# 알고리즘 복습


[12919](https://programmers.co.kr/learn/courses/30/lessons/12919)
```js
function solution12919(arr) {
    return `김서방은 ${arr.indexOf('Kim')}에 있다`
    // arr 중 'Kim'의 index
}

console.log(solution12919(["Jane", "Kim"])) // 
```

[12921](https://programmers.co.kr/learn/courses/30/lessons/12921)
```js
function solution12921(num) {
    const arr = new Array(num - 1).fill(0).map((val, idx) => val = idx + 2);
    // num 만큼 배열

    let answer = new Array(num - 1).fill(0);
    // 1을 제외한 배열

    for(let i = 0; i < arr.length; i++){
        for(let k = 2; k <= arr[i]; k++){
            if(arr[i] % k === 0) answer[i] ++;
            // 소수라면 나눴을 때 0이 되는 값은 본인밖에 없음
        }
    }

    return answer.filter((val) => val === 1).length;
    // 나눠진 값이 본인밖에 없는 값으로 필터링 후 배열의 길이 반환
}
console.log(solution12921(10)) // 4
console.log(solution12921(5)) // 3
```

[12922](https://programmers.co.kr/learn/courses/30/lessons/12922)
```js
function solution12922(num) {
    return '수박'.repeat(Math.round(num / 2)).substr(0, num);
    // 수박으로 반복하되, num이 홀수일 수 있으니 반올림, substr으로 잘라줌 
}

console.log(solution12922(3)) // 4
console.log(solution12922(4)) // 3
```

[12926](https://programmers.co.kr/learn/courses/30/lessons/12926)
```js
function solution12926(str, n) {
    let arr = str.split('').map((val) => val = Number(val.charCodeAt()));
    // str을 배열에 담아 값을 아스키코드로 변환

    return arr.map((val) => {
        let num = val + n;
        // 원래 값 + 미뤄야 하는 값

        if(val === 32) return String.fromCharCode(32);
        // 공백일 때 공백 반환

        if(val > 90) {
            if(num >= 123) num -= 26;
            // Z 다음은 A가 되야하므로 -26

            return String.fromCharCode(num);
            // 아스키코드를 문자열로 반환
        }
        else {
            if(num >= 91) num -= 26;
            // z 다음은 a가 되야하므로 -26

            return String.fromCharCode(num);
            // 아스키코드를 문자열로 반환

        }
    }).join(''); // 배열 합치기
}

// console.log(solution12926('AB', 1)) // BC
// console.log(solution12926('z', 1)) // a
// console.log(solution12926('a B z', 4)) // e F d
console.log(solution12926('yz', 1)); // za
console.log(solution12926('z', 2)); // b
console.log(solution12926('Aa Z z', 2)); // Cc B b
```