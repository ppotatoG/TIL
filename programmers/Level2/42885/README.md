# 구명보트

[programmers](https://programmers.co.kr/learn/courses/30/lessons/42885)

### 제출한 정답
```js
const solution = (people, limit) => {
    people.sort((a, b) => a - b);
    let answer = 0;
    let rt = people.length - 1;
    let lt = 0;

    while (lt < rt) {
        if (people[lt] + people[rt] > limit) rt--;
        else {
            rt--;
            lt++;
        }
        answer++;
    }

    if (lt === rt) answer++;

    return answer;
}
```


[참고 블로그](https://m.blog.naver.com/dlaxodud2388/222652222328)

[투포인터](https://butter-shower.tistory.com/226)