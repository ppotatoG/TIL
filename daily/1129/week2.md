# 2주차 예제 (Generator & Iterable)

Iterable 객체란 for..of 문을 사용할 수 있는 [Symbol.iterator] 함수가 내장된 객체를 말합니다.

1. 위 기재드린 obj 를 사용하여 
    1부터 50까지의 숫자 중 '짝수'만 반환하는 이터레이터 함수를 구현해주세요. (출력 형식은 자유입니다.)

2. 위에서 구현한 이터레이터 함수를 제너레이터 함수로 변경하여 출력해주세요. :-D

감사합니다.

```js
let obj = {'start': 1, 'end': 50}
```


### 배열
```js
const arr = new Array(obj.end)
.fill(obj.start)
.map((val, idx) => val += idx)
.filter((a) => a % 2 == 0);

// (25) [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50]
```

### Object iterator

```js
obj.start = obj.start % 2 ? obj.start - 1 : obj.start;

const iter = {
    val: obj.start,
    next() {
        return {
            value: this.val += 2,
            done: this.val > obj.end,
        }
    },
    [Symbol.iterator]() {
        return this
    }
}

console.log([...iter]);
// (25) [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50]
```