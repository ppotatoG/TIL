# 코딩테스트 연습 직사각형 별찍기

[programmers](https://programmers.co.kr/learn/courses/30/lessons/12969?language=javascript)

### 제출한 정답
```js
```

[참고 포스팅](https://velog.io/@wjdaud107/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8javascript%EC%A7%81%EC%82%AC%EA%B0%81%ED%98%95-%EB%B3%84-%EC%B0%8D%EA%B8%B0)

```js
process.stdin.on('data', data => { //입력받은 숫자를 'data에 받는다'
    const n = data.split(" "); // data(입력받은 숫자)를 배열로 변경
    const a = Number(n[0]), b = Number(n[1]); //a는 한줄에대한 별의 갯수, b는 몇줄 출력
    console.log(a);//알지?
    console.log(b);//알면서
});
```

`process.stdin`가 뭔진 모르겠지만 어떻게 잘 해봤다