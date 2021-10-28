# 알고리즘 복습

### 폰켓몬
[1845](https://programmers.co.kr/learn/courses/30/lessons/1845)

- 최대 `arr/2`만 가져갈 수 있음
- 최대한 다양한 종류를 가져가기
```js
function solution1845(arr) {
    const answer = [...arr].filter((a, b) => [...arr].indexOf(a) === b).length;
    // 원복배열이 변하지 않게 가져와 중복제거

    return answer < arr.length / 2 ? answer : arr.length / 2;
    // arr/2 를 확인하여 answer이 더 크면 arr/2 반환
}

console.log(solution1845([3,1,2,3])) // 3
console.log(solution1845([3,3,3,2,2,4])) // 3
console.log(solution1845([3,3,3,2,2,2])) // 2
```
### 가운데 글자 가져오기
[12903](https://programmers.co.kr/learn/courses/30/lessons/12903)
- 단어 s의 가운데 글자를 반환하는 함수
- 단어의 길이가 짝수라면 가운데 두글자 반환
```js
function solution12903(str) {
    return str.length % 2 == 0 ? str.substr((str.length / 2) - 1, 2) : str.substr(str.length / 2, 1);
    // 짝수일때와 홀수일때 ..
}
console.log(solution12903('abcde')) // c
console.log(solution12903('qwer')) // we
```

### 같은 숫자는 싫어
[12906](https://programmers.co.kr/learn/courses/30/lessons/12906)
- 배열의 index에 따라 중복되는 값 제거, 모든 중복 제거 X
```js
function solution12906(arr) {
    return arr.filter((val, idx, array) => val != array[idx + 1]);
    // arr[i]값과 arr[i + 1] 같지 않게 필터링
}
console.log(solution12906([1,1,3,3,0,1,1])) // [1,3,0,1]
```

### 나누어 떨어지는 숫자 배열
[12910](https://programmers.co.kr/learn/courses/30/lessons/12910)
- arr % div % == 0인 값 반환
- 빈 배열이면 -1 반환
```js
function solution12910(arr, div) {
    arr = arr.sort((a, b) => a - b).filter((val) => val % div == 0)
    return arr.length === 0 ? [-1] : arr;
}
console.log(solution12910([5, 9, 7, 10], 5)) // [5, 10]
console.log(solution12910([2, 36, 1, 3], 1)) // [1, 2, 3, 36]
console.log(solution12910([3,2,6], 10)) // -1
```

### 두 정수 사이의 합
[12912](https://programmers.co.kr/learn/courses/30/lessons/12912)
- a와 b 사이에 모든 숫자의 합 구하기
```js
function solution12912(a, b) {
    return new Array(Math.max(a, b) - Math.min(a, b) + 1)
    // a와 b중 큰값과 작은값의 차 + 1 길이의 배열 만들기
    .fill(0)
    // 배열 0으로 채우기
    .map((val, idx) => val = Math.min(a, b) + idx)
    // 배열 돌며 작은값 + index
    .reduce((a, b) => a + b);
    // 모든 값 더하기
}
console.log(solution12912(3, 5)) // 12 
console.log(solution12912(3, 3)) // 3 
console.log(solution12912(5, 3)) // 12
```
### 문자열 내 마음대로 정렬하기
[12915](https://programmers.co.kr/learn/courses/30/lessons/12915)
- arr의 값을 num번째 글자 기준으로 정렬
- num번째 글자로 정렬 후, 나머지 글자는 오름차순으로
```js
function solution12915(arr, num) {
    return arr.sort((a, b) => {
        if(a[num] > b[num]) return 1;
        if(a[num] < b[num]) return -1;
        // num번째 글자로 정렬

        if(a > b) return 1;
        if(a < b) return -1;
        // 나머지는 오름차순

        else return 0;
    })
}
console.log(solution12915(["sun", "bed", "car"], 1)) // ["car", "bed", "sun"]
console.log(solution12915(["abce", "abcd", "cdx"], 2)) // ["abcd", "abce", "cdx"]
```
### 문자열 내 p와 y의 개수
[12916](https://programmers.co.kr/learn/courses/30/lessons/12916)
- p와 y의 개수가 같으면 true, 다르면 false
```js
function solution12916(str) {
    str = str.toUpperCase();
    // 글자들 모두 대문자로 변환

    const p = str.split('').filter((a) => a === 'P');
    // str중 P만 담은 배열

    const y = str.split('').filter((a) => a === 'Y');
    // str중 Y만 담은 배열
    
    return p.length === y.length;
    // 배열 길이 비교 => 불리언값
}
console.log(solution12916('pPoooyY')) // true
console.log(solution12916('Pyy')) // true
```

### 문자열 내림차순으로 배치하기
[12917](https://programmers.co.kr/learn/courses/30/lessons/12917)
```js
function solution12917(str) {
    return str
    .split('') // 문자열 자르기
    .sort() // 배열 정렬(오름차순)
    .reverse() // 배열 뒤집기(내림차순)
    .join(''); // 배열 문자열로 합치기
}
console.log(solution12917('Zbcdefg')) // gfedcbZ
```

### 문자열 다루기 기본
[12918](https://programmers.co.kr/learn/courses/30/lessons/12918)
- 문자열 길이가 4또는 6
- 문자열이 숫자로만 이루어져있는지
```js
function solution12917(str) {
    let arr = str.split(''); // str배열로
    arr = arr.map((val) => Number(val) == val).filter((val) => val === true);
    // arr 값을 Number()에 넣었을 때 원래 값과 같으면 true
    // false인 값 필터로 제거

    return (str.length === 4 || str.length === 6) && arr.length === str.length;
    // (길이가 4 또는 6) 그리고 str의 길이와 arr길이가 같아야 함
}
console.log(solution12917('a234')) // false
console.log(solution12917('1234')) // true
```