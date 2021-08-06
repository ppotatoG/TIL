# 210806

### 다수의 체크박스 중 3개 이상 체크되면, 체크 안됨 및 얼럿창

3개째부터 클릭은 안되지만, 체크된걸 해제 해도 클릭안됨
```js
const chks = document.querySelectorAll('input[name="chk"]');
let countChk = 0;

chks.forEach((chk) => {
    chk.addEventListener('change', (e) =>{
        if(chk.checked == true) { 
            countChk++;
            if(countChk > 2) {
                window.alert('2')
                chk.checked = false;
            }
        }
    })
})
```

e.target.checked 가 아닌데도 push된다
```js
const chks = document.querySelectorAll('input[name="chk"]');
let countChk = [];

chks.forEach((chk) => {
    chk.addEventListener('change', (e) =>{
        if(e.target.checked === true) { 
            countChk.push(chk);
        }else if(e.target.checked === false) {
            countChk.pop(chk)
        }
        
        console.log(countChk.length);

        if(countChk.length > 3){
            chk.checked = false;
            return false;
            window.alert('3')
        }
    })
})
```

---
# 복습

[12916](https://github.com/ppotatoG/TIL/tree/master/programmers/12916)

reduce는 개쩐다를 기억해서 썻지만.. 아닌것같다
컨닝한 기분이라 몹시 찝찝함
- +3 점으로 통과
```js
function solution(string){
    let array = string.toUpperCase().split('');

    let reducer = (acc, cur) => {
        if(!acc[cur]) acc[cur] = 1;
        else acc[cur] = acc[cur] + 1;
        
        return acc;
    }

    let answer = array.reduce(reducer, {})

    if(answer.P == answer.Y) return true;
    else return false;
}
```
