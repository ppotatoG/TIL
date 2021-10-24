# 다트게임

[programmers](https://programmers.co.kr/learn/courses/30/lessons/17682)

### 제출한 정답
```js
```

숫자가 삭제되서 잘린다,.,,..,,
```js
function solution(str) {
    return str.split(/[0-9]/); // ['', 'S', 'D*', 'T']
}
```

이게 되네 진짜 대박 뿌듯하다 알고리즘 너무 재밋다..
```js
function solution(str) {
    let arr = 
    str.split('') // srt을 하나씩 자름
    .map((val) => {
        return Number(val) == val ? val = ' ' + val : val 
        // 자른 값이 number로 바뀌었을 때, NaN이 아닌 val과 값이 같을 때 (==) 값 앞에 공백 추가
    })
    .join('') // 배열 합친 후
    .split(' ') // 공백으로 자르기
    .slice(1); // 배열의 첫번째 삭제 (공백)
    
    return arr // ['1S', '2D*', '3T']
}
```

근데 또 옵션 생각할라니까 머리 하나도 안돌아가는데.......

숫자가 10이면 1, 0으로 잘려버리네... 진짜 화나 휴;;

`replace`로 해보고싶은데.. 이거또한 어렵다
```js
function solution(str) {
    let arr = 
    str.split('')
    .map((val) => {
        return Number(val) == val ? val = ' ' + val : val
    })
    .join('')
    .split(' ')
    .slice(1);
  
    arr = arr.map((val) => {
        let num = Number(val[0]);

        if(val.length === 2) {
            if (val[1] === 'S') return val = num ** 1;
            if (val[1] === 'D') return val = num ** 2;
            if (val[1] === 'T') return val = num ** 3;
        }

        else return val;
    })

    console.log(arr.join(' + '))
    return arr;
}
```