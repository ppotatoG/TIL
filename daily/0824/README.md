# 에라토스테네스의 체

[에라토스테네스의 체](https://ko.wikipedia.org/wiki/%EC%97%90%EB%9D%BC%ED%86%A0%EC%8A%A4%ED%85%8C%EB%84%A4%EC%8A%A4%EC%9D%98_%EC%B2%B4)

[참고 블로그](https://junkim.netlify.app/posts/programmers0807)

```js
function fnc(n) {
    const arr = [];
    
    for (let i = 0; i < n + 1; i += 1) {
        arr.push(true);
    }

    // console.log(arr) // [true, true, true, true, true, ... , true]
    
    for (let i = 2; i * i <= n; i += 1) { // 제곱근을 제외하기 위한, i*i <= n
        // console.log(i) // [2, 3, 4, 5, 6, 7, 8, 9, 10]
        if (arr[i]) {
            for (let j = i * i; j <= n; j += i) { 
                // console.log(j) // i제곱부터 i의 배수
                arr[j] = false; // true 로 이루어진 배열에 false 추가
            }
        }
    }
    
    arr.splice(0, 2, false, false); // 0, 1은 소수가 아님
    
    const result = arr.filter((value) => { // arr 중 값이 false인 애들 뺴고 재배열
        return value !== false;
    })

    console.log(result);
    
    // return result.length;
}

console.log(fnc(100));
```