# 배열 ?

[순서에 따라 재배치하는 프로세스](https://velog.io/@young_mason/Algorithm-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-Sorting-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-Basic%ED%8E%B8)

### 버블정렬
```js
function solution(arr){
    let blank = '';

    if(arr[0].charCodeAt(0) > arr[1].charCodeAt(0)) {
        blank = arr[0];
        arr[0] = arr[1];
        arr[1] = blank;
    }
    if(arr[1].charCodeAt(0) > arr[2].charCodeAt(0)) {
        blank = arr[1];
        arr[1] = arr[2];
        arr[2] = blank;
    }

    return arr;
}

console.log(solution(["sun", "bed", "car"])); //  ["bed", "car", "sun"]
```

내가 이걸 중복문으로 돌릴 수 있을까..!

```js
function solution(arr){
    let blank = '';

    for(let j = 0; j < arr.length -1; j++){
        for(let i = 0; i < arr.length -1; i++){
            if(arr[i].charCodeAt(0) > arr[i + 1].charCodeAt(0)) {
                blank = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = blank;
            }
        }
    }

    return arr;
}

console.log(solution(['sun', 'bed', 'car', 'she', 'apple', 'banana']));
// ["apple", "bed", "banana", "car", "sun", "she"]
```

charCodeAt(0)가 같으면 charCodeAt(1)로 비교하기
```js
function solution(arr){
    let blank = '';

    for(let j = 0; j < arr.length -1; j++){
        for(let i = 0; i < arr.length -1; i++){
            if(arr[i].charCodeAt(0) > arr[i + 1].charCodeAt(0)) {
                blank = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = blank;
            } else if(arr[i].charCodeAt(0) == arr[i + 1].charCodeAt(0)) {
                if(arr[i].charCodeAt(1) > arr[i + 1].charCodeAt(1)) {
                    blank = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = blank;
                } 
            }
        }
    }

    return arr;
}

console.log(solution(['sun', 'bed', 'car', 'she', 'apple', 'banana']));
```

charCodeAt 없이 부등호로 비교해도 된다
```js
function solution(arr){
    let blank = '';

    for(let j = 0; j < arr.length -1; j++){
        for(let i = 0; i < arr.length -1; i++){
            if(arr[i] > arr[i + 1]) {
                blank = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = blank;
            }
        }
    }

    return arr;
}

console.log(solution(['sun', 'bed', 'car', 'she', 'apple', 'banana']));
// ["apple", "banana", "bed", "car", "she", "sun"]

console.log(solution(['aaab', 'aaac', 'aaaw', 'aaaa']));
// ["aaaa", "aaab", "aaac", "aaaw"]
```