# 프린터

[programmers](https://programmers.co.kr/learn/courses/30/lessons/42587)

### 제출한 정답

```js
```

다른거 다 모르겠고, 이전 문제부터 자꾸 중복문 내 값이 이상하게 찍힌다

생각나는건 클로저밖에 없는데,,,, 그건 변수가 할당되는 스코프 안팎으로 생기는거 아닌가? '-';

---

뭐 어찌저찌 한거 같은데... 이상하다? index값이 이상해?? 머지???

중요도와 인쇄..가 이 순서가 아닌거같다!
```js
0 [1, 3, 2, 2]
1 [3, 2, 2], [1]
2 [2, 2, 3], [1]
3 [2, 3, 2], [1]
4 [3, 2], [1, 2]
5 [2, 3], [1, 2]
6 [3], [1, 2, 2]
7 [], [1, 2, 2, 3]
```

```js
function solution(priorities, location) {
    let arr = priorities.slice().map((val, idx) => val = [val, idx]);

    let print = [];
    let i = 0;
    while(print.length < priorities.length){
        const greater = arr.find((val, idx) => val[0] >= arr[i][0] && idx < i);
        
        if(greater) {
            print.push(arr[i]);
        }
        else {
            arr.push(arr[i]);
        }
        i++;
    }
    
    return print;
    return print.find((val) => val[1] === location - 1)[0]
}
```

오케 순서는 이거인듯 

```js
/*
0 [1, 3, 2, 2]
1 [3, 2, 2, 1]
2 [2, 2, 1], [3]
3 [2, 1], [3, 2]
4 [1], [3, 2, 2]
5 [], [3, 2, 2, 1]
*/
```