# iterable, iterator, generator

## Iterable

`Symbol(Symbol.iterator)`라는 매소드를 갖고있는 개체는 `iterable`한 개체

```js
const arr = [1, 2, 3, 4];
console.dir(arr);
// Symbol(Symbol.iterator)
```

## Iiterator

`iterable`한 개체는 `Iiterator`

`Symbol(Symbol.iterator)`이 없으면 만들어주면 된다!

### 이터레이션 프로토콜을 준수해 이터레이터 구현하기

1. 객체에는 'next' 메소드가 존재해야 한다.
2. next 메소드는 다시 객체를 반환해야 한다.
3. 반환되는 객체에는 boolean 값을 가지는 done 프로퍼티가 존재해야 한다.
4. value 프로퍼티를 추가하고, 일정시점에 done을 true로 변환할 수 있게끔 한다.

```js
const iter = {
    val: obj.start,
    next() {  // 1
        return { // 2
            value: this.val += 2, // 4
            done: this.val > obj.end, // 3
        }
    },
    [Symbol.iterator]() {
        return this
    }
}

[...iter()]
```

## Generator

- 이터러블을 생성하는 함수
- 이터레이션 프로토콜을 준수해 이터러블을 생성하는 방식보다 간편하게 이터러블을 구현
- 비동기 처리에 유용하게 사용

### yield*

반환할 값에 멈춰 해당 값을 `Iterable`하게 하나씩 반환

```js
const arr = [1, 2, 3, 4]
function* gen1(){
    yield* arr
}

console.log([...gen1()]) // [1, 2, 3, 4]
```
### Generator argument

일반 함수처럼 값을 넘겨 실행

```js
function* gen2(num){
    while(num <= 5){
        yield num
        num += 2;
    }
} 

console.log([...gen2(2)]) // [2, 4]
console.log([...gen2()]) // []
```

## 추가예제

하단 내용을 `이터레이터 함수` 또는 `제너레이터 함수`로 변경하여 츌력해주세요 （。＾▽＾）

[x만큼 간격이 있는 n개의 숫자](https://programmers.co.kr/learn/courses/30/lessons/12954)

```js
function solution(x, n) {
    return new Array(n).fill(x).map((val, idx) => val *= idx + 1);
}

console.log(solution(2, 5))
```

<details>
<summary>Iterator</summary>

```js
function fnc(x, n){
    const iter = {
        val: 0,
        next() {
            return {
                value: this.val += x,
                done: Math.abs(this.val) > Math.abs(x * n),
            }
        },
        [Symbol.iterator]() {
            return this
        }
    }
    
    return([...iter]);
}
console.log(fnc(2, 5))
```
</details>

<details>
<summary>Generator</summary>

```js
 function fnc(x, n) { 
     function* gen(x, n){
        let i = 1;
        while(i < n + 1){
            yield x * i
            i++;
        }
    }
    
    return [...gen(x, n)]
 }

 console.log(fnc(2, 5))
```
</details>