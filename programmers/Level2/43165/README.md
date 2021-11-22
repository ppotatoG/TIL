# 타겟넘버

[programmers](https://programmers.co.kr/learn/courses/30/lessons/43165)

### 제출한 정답

```js
```


배열의 각 값마다 음수를 어떻게 잘 해봤는데.. 

제출하려고 보니 배열이 제곱이 되야 하더라

너무 막막해서 구글찬스 쓸거

```js
function solution(arr, num) {    
    let answer = new Array(arr.length ** 2)
    .fill(0)
    .map((val) => val = [...arr]);

    for(let i = 0; i < answer.length; i++){
        for(let k = 0; k <= i; k++){
            answer[i][k] *= -1
        }   
    }

    return answer;

    answer.unshift(arr);

    console.log(answer);

    answer = answer.map((val) => {
        return val.reduce((a, b) => a + b);
    })

    console.log(answer);

    answer.filter((val) => val === num);
    
    return answer
}
```

[소면(Somyeon)](https://jjnooys.medium.com/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%ED%83%80%EA%B2%9F-%EB%84%98%EB%B2%84-javascript-1d7983d423b5)

[내가 생각한 방법과 가장 비슷한..?](https://programmers.co.kr/questions/14095)