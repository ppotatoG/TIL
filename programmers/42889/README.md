# 실패율 키패드 누르기

[programmers](https://programmers.co.kr/learn/courses/30/lessons/42889)

### 제출한 정답
```js
```

`n스테이지에 머무른 유저` / `n스테이지까지 깬 유저`

실컷 객체로 하면서, value로 정렬해 key값을 빼내면 되는데 그걸 못하겠다ㅜ

```js
function solution(n, stages) {
    let user = stages.length;
    let obj = new Array(n).fill(0).reduce(function(target, key, idx) {
        target[idx + 1] = key;
        return target;
    }, {});

    for(key in obj) {
        obj[key] = stages.filter((val) => val == key).length;
    }

    for(key in obj) {
        console.log(user)
        user -= obj[key];
        obj[key] /= user;
    }

    console.log(Object.keys(obj))
    console.log(Object.values(obj))
    console.log(obj)

    obj = Object.values(obj).sort();

    return obj;
    // return Object.values(obj).sort().reduce((newObj, key) => {
    //     newObj[key] = obj[key];
    //     return newObj;
    // }, {});
}
```

테케 27개 중 3개 시간초과 빼고 통과!
```js
function solution(n, stages) {
    let user = stages.length;

    let arr = new Array(n).fill(0).map((val, idx) => {
        return val = new Array(1).fill(idx + 1)
    });

    for(let i = 0; i < arr.length; i++) {
        arr[i].push(stages.filter((val) => val == arr[i]).length);
    }

    for(let i = 0; i < arr.length; i++) {
        user -= arr[i][1];
        arr[i][1] /= user;
    }
    
    arr.sort((a, b) => {
        if (a[1] < b[1]) return 1
        else if (a[1] > b[1]) return -1
        else return 0
    })

    return arr.map((val) => val[0]);
}
```

해냈다.. 대박.. ƪ(˘⌣˘)ʃ
```js
function solution(n, stages) {
    let user = stages.length;
    let arr = new Array(n).fill(0).map((val, idx) => {
        let tmp1 = val = idx + 1;
        let tmp2 = stages.filter((val) => val == tmp1).length;

        user -= tmp2;
        tmp2 /= user;

        return [tmp1, tmp2]
    });
    
    arr.sort((a, b) => {
        if (a[1] < b[1]) return 1
        else if (a[1] > b[1]) return -1
        else return 0
    })
    
    return arr.map((val) => val[0]);
}
```