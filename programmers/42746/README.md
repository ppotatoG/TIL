# 가장 큰 수

[programmers](https://programmers.co.kr/learn/courses/30/lessons/42746)

### 제출한 정답

```js
function solution(num) {    
    num.sort((a, b) => {
        let num1 = String(a);
        let num2 = String(b);

        if(num1.length > num2.length){
            if(num1 + '' + num2 > num2 + '' + num1) return 1;
            if(num1 + '' + num2 < num2 + '' + num1) return -1;
        }

        if(num1.length < num2.length){
            if(num1 + '' + num2 > num2 + '' + num1) return 1;
            if(num1 + '' + num2 < num2 + '' + num1) return -1;
        }

        if(num1.slice(0, 1) > num2.slice(0, 1)) return 1;
        if(num1.slice(0, 1) < num2.slice(0, 1)) return -1;

        if(num1.slice(1, 2) > num2.slice(1, 2)) return 1;
        if(num1.slice(1, 2) < num2.slice(1, 2)) return -1;

        if(num1.slice(2,3) > num2.slice(2,3)) return 1;
        if(num1.slice(2,3) < num2.slice(2,3)) return -1;

        return 0;
    }).reverse();

    return num[0] === 0 ? String(0) : num.join(' ');
}
```

a와 b의 각 자릿수별로 비교하면 될 줄 알았다

아니였다ㅎ
```js
function solution(num) {
    console.log(String(num[2]).slice(0, 1))
    
    return num.sort((a, b) => {
        if(String(a).slice(0, 1) > String(b).slice(0, 1)) return 1;
        if(String(a).slice(0, 1) < String(b).slice(0, 1)) return -1;

        if(String(a).slice(1, 2) > String(b).slice(1, 2)) return 1;
        if(String(a).slice(1, 2) < String(b).slice(1, 2)) return -1;
        
        if(String(a).slice(2, 3) > String(b).slice(2, 3)) return 1;
        if(String(a).slice(2, 3) < String(b).slice(2, 3)) return -1;

        if(String(a).length < String(b).length) return 1;
        if(String(a).length > String(b).length) return -1;

        return 0
    }).reverse().join(' ');
}
```

이렇게 되게 해야 한다
```js
[30, 34, 3] => [34, 3, 30]
```

테스트는 통과했지만 정답은 아니다!
```js
function solution(num) {    
    return num.sort((a, b) => {
        let num1 = String(a);
        let num2 = String(b);

        if(num1.length > num2.length){
            if(num1 + '' + num2 > num2 + '' + num1) return 1;
            if(num1 + '' + num2 < num2 + '' + num1) return -1;
        }

        if(num1.slice(0, 1) > num2.slice(0, 1)) return 1;
        if(num1.slice(0, 1) < num2.slice(0, 1)) return -1;

        if(num1.slice(1, 2) > num2.slice(1, 2)) return 1;
        if(num1.slice(1, 2) < num2.slice(1, 2)) return -1;

        if(num1.slice(2,3) > num2.slice(2,3)) return 1;
        if(num1.slice(2,3) < num2.slice(2,3)) return -1;

        return 0;
    }).reverse().join(' ');
}
```


질문하기에서 `[9,997,99,878,87]` 해보래서 앗차 하고 중복 하나 더 묶어줌

근데도 안되길래 더 보니까 `[0, 0, 0]`도 해보래서 했는데 외않돼지'ㅅ'

<br>

`[0, 0, 0, 1000]` 하니까 return 값이 0으로 나온당.. 
```js
function solution(num) {    
    num.sort((a, b) => {
        let num1 = String(a);
        let num2 = String(b);

        if(num1.length > num2.length){
            if(num1 + '' + num2 > num2 + '' + num1) return 1;
            if(num1 + '' + num2 < num2 + '' + num1) return -1;
        }

        if(num1.length < num2.length){
            if(num1 + '' + num2 > num2 + '' + num1) return 1;
            if(num1 + '' + num2 < num2 + '' + num1) return -1;
        }

        if(num1.slice(0, 1) > num2.slice(0, 1)) return 1;
        if(num1.slice(0, 1) < num2.slice(0, 1)) return -1;

        if(num1.slice(1, 2) > num2.slice(1, 2)) return 1;
        if(num1.slice(1, 2) < num2.slice(1, 2)) return -1;

        if(num1.slice(2,3) > num2.slice(2,3)) return 1;
        if(num1.slice(2,3) < num2.slice(2,3)) return -1;

        return 0;
    }).reverse();

    return num[num.length - 1] === 0 ? String(0) : num.join(' ');
}
```

`num[num.length - 1]` 부분이 문제였어..

다들 짧게 잘 쓰셨는데 이건 내가 알고리즘 오랜만이라 그런걸까

내가 똥멍청이 인건가 진짜 속상해ㅠ