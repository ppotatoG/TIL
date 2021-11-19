# [1차] 비밀지도

[programmers](https://programmers.co.kr/learn/courses/30/lessons/17681)

### 제출한 정답
```js
function solution(n, arr1, arr2) {

    let array = [...arr1];

    for(let i = 0; i < arr1.length; i++){
        let binary1 = arr1[i].toString(2);
        let binary2 = arr2[i].toString(2);

        array[i] = (Number(binary1) + Number(binary2) + '');

        if(array[i].length !== n){
            array[i] = ('0').repeat(n - array[i].length) + array[i];
        }
    }

    return array
    .map((val) => (val + '')
    .split('')
    .map((val2) => {
            return val2 === '0' ? val2 = ' ' : val2 = '#';
        }
    ).join(''));
}
```

1. `arr1`, `arr2`의 값을 2진수로 변환
2. 2진수로 변환된 값의 길이가 `n`보다 짧다면, 앞에 0을 추가
3. `arr1`, `arr2`를 더해 0은 `' '`, 나머지는 `'#'`로 변경

나는 자꾸 문자열도 split()으로 잘라서 map()으로 바꾸고 join()으로 바꾼다

reaplce쓰면 되는걸

---

`toString`을 사용하면 값이 문자열이 되기 때문에 `Number()`로 바꿔주기

값끼리 더해놨기 때문에 `toString`으로 다시 문자열로 바꿔주고

`padStart`으로 0 붙여주기

`replace`로 값을 ' '또는 '#'으로 변환

```js
function solution(n, arr1, arr2) {
    return arr1.map((val, idx) => {
        let value = Number(val.toString(2)) + Number(arr2[idx].toString(2));
        
        return value
        .toString()
        .padStart(n, 0)
        .replace(/1|2/g, '#')
        .replace(/0/g, ' ');
    })
}
```