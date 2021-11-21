# 행렬의 덧셈

[programmers](https://programmers.co.kr/learn/courses/30/lessons/12950)

### 제출한 정답

```js
function solution(arr1, arr2) {
    return [...arr1].map((cur, idx) => [...arr2][idx].map((cur2, idx2) => arr1[idx][idx2] + arr2[idx][idx2], 0), 0);
}
```

일단 런타임에러... reduce 쓰야 할 것 같다

중복으로 돌려서 값을 얻은 후 코드를 변경하는게 더 편하다 아직 코린이라 그런가

참고로 저렇게 쓰면 `else` 부분 값이 string으로 더해진다
```js
function solution(arr1, arr2) {
    let answer = [[], []];
    for(let i = 0; i < arr1.length; i++){
        if(arr1[0].length > 1){
            for(let j = 0; j < arr1[i].length; j++){
                answer[i].push(arr1[i][j] + arr2[i][j]);
            }
        }else {
            answer[i].push(arr1[i] + arr2[i]);
        }
    }
    return answer;
}
```

어떻게 해봤는데............
```js
return [...arr1].map((cur, idx) => {
    if(arr1[0].length === 1) return Number(arr1[idx]) + Number(arr2[idx]);
    else return [...arr2].map((cur2, idx2) => {
        return arr1[idx][idx2] + arr2[idx][idx2];
    }, 0);
}, 0);
```

[참고한 글](https://jo-c.tistory.com/18)

1. `if(arr1[0].length === 1)` 

for문 돌렸을 때부터 `arr[i][j] === undifined` 일 때, error 를 반환해서 넣은 값
저걸 계속 갖고있던게 실패 원인 중 큰 것 같다

2. [...arr1].map((cur, idx) => `[...arr2][idx]`.map((cur2, idx2)

첫 for문에서도 arr1로 한번, 내부에서 arr1[i]로 한번 더 돌렸는데 map에서는 그렇게 할 생각을 왜 못했는지.. 아쉽다