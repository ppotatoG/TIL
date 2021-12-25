# 영어 끝말잇기

[programmers](https://programmers.co.kr/learn/courses/30/lessons/12981)

### 제출한 정답
```js
function solution(n, arr) {
    const dplct = arr.filter((val, idx) => {
        return arr.indexOf(val) !== idx; 
    })[0];

    if(dplct) {
        const idx = arr.lastIndexOf(dplct) + 1;
        return [idx % n === 0 ? n : idx % n, Math.ceil(idx / n)];
    }

    arr = arr.map((val, idx) => {
        if(idx !== 0) {
            const prev = arr[idx - 1].slice(-1);
            return val.slice(0, 1) !== prev ? false : val;
        } 
        else return val;
    })
    
    const idx = arr.findIndex(val => val === false) + 1;
    
    return idx !== 0 ? [idx % n === 0 ? n : idx % n, Math.ceil(idx / n)] : [0, 0];
}
console.log(solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"])); 
console.log(solution(5, ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"])); 
console.log(solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])); 
```