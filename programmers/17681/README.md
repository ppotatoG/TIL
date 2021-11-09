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