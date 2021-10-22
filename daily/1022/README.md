# 네이버 부스트캠프 자가진단


이거보고 생각나서 다시 해보는 함수만들기

[네이버파이낸셜 개발자 채용 챌린지](https://programmers.co.kr/competitions/1868)


내가 예전에 이렇게 만들었다는데 진짜 기억 하나도 안난다 대박

예전에 내가 지금보다 알고리즘을 더 잘했던거 아닐가...
```js
function solution(l){
    const arr = [];
    let answer = [];

    for(let i = 0; i < l.length; i++){
        if(l.indexOf(l[i]) == i) {
            arr.push(l[i]); // 배열l에서 중복을 제거한 배열 arr
            answer.push(0); // arr.lenght 만큼 0으로 채운 배열 answer
        }
    }

    arr.sort((a, b) => a == b ? 0 : a > b ? 1: -1 ); // arr 정렬

    for(num in l) { 
        const idx = arr.indexOf(l[num]); // 뭔지 알겠는데 뭔지 잘 모르겠다
        answer[idx] += 1; // 값이 있으면 +1
    }

    answer = answer.filter((a) => a !== 1); // 값이 1이면 중복이 아니기 땜시 배열에서 지움

    return answer;
}
```

뭔진 대충 알겠는데 잘 모르겠다 배고파서 그런듯

```js
function solution(arr){
    let newArr = new Array(Math.max.apply(Math, arr)).fill(0); 
    // arr중 가장 큰 수 길이의 0이 담긴 배열 생성 

    arr.sort((a, b) => a - b); // arr 정렬

    for(let i = 0; i < arr.length; i ++){
        newArr[arr[i] - 1] += 1; // 이거 하느라 고생 좀 했는데 설명을 못하겠다
    }

    return newArr.filter((a) => a !== 1);
}

console.log(solution([3, 4, 2, 5, 3, 3, 4, 6, 1, 2, 3, 6])); // [2, 4, 2]
```
밥먹어야징 배고파