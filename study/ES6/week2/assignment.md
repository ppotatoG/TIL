# 2주차 예제 (Generator & Iterable)

```js
let obj = {'start': 1, 'end': 50}
```

Iterable 객체란 for..of 문을 사용할 수 있는 [Symbol.iterator] 함수가 내장된 객체를 말합니다.

1. 위 기재드린 obj 를 사용하여 1부터 50까지의 숫자 중 '짝수'만 반환하는 이터레이터 함수를 구현해주세요. (출력 형식은 자유입니다.)

2. 위에서 구현한 이터레이터 함수를 제너레이터 함수로 변경하여 출력해주세요. :-D

감사합니다.



## 일반 배열

1. `obj.end`길이의 배열 생성
2. `arr`의 값을 `obj.start`로 채우기
3. [map](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)으로 순회하며 값을 `+= 1`
4. [filter](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)로 짝수인 값만 남기기

```js
const arr = new Array(obj.end)
.fill(obj.start)
.map((val, idx) => val += idx)
.filter((a) => a % 2 == 0);

// (25) [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50]
```

## Iterator

1. `obj.start`의 값이 짝수, 홀수인지에 따라 `-1`
2. `iter`의 값을로 `1`에서 확인한 `obj.start`대입
3. [next()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Generator/next)값은 `짝수`이므로 += 2
4. `obj.end`보다 크면 멈춤

`iterator.next()`를 사용했을 때, 첫값은 찍히지 않으므로, `iter`의 첫 값은 0

`-2`를 주고 시작해도 되지만, 개인적으로 이 방법이 가장 깔끔한 코드라고 생각

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

## Generator

- `gen2`함수 안에서 중복문 돌리며 조건에 맞는 값 반환

```js
function* gen1(){
    for(let i = obj.start; i <= obj.end; i ++){
        i !== 0 && i % 2 === 0 ? yield i : 0;
    }
}

console.log([...gen1()])
```

## Generator yield*

- `yield*`사용으로 값이 들어있는 `arr`나열

```js
function* gen2(){
    yield* arr
}

console.log([...gen2()])
// (25) [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50]
```

## Generator argument

- `generator`에 인자 넘겨주기

```js
function* gen3(startNum){
    while(startNum <= obj.end){
        yield startNum
        startNum += 2;
    }
} 

console.log([...gen3(2)])
```

## Iterator to generator

- 출제자가 원한게 이게 맞는지 잘 모르겠지만 일단 해봤습니다ㅠ

```js
const iterToGen = {
    *[Symbol.iterator] () {
        let num = obj.start + 2;
        while(num <= obj.end){
            yield num;
            num += 2;
        }
    }
}
console.log([...iterToGen])
```
