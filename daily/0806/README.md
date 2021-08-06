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

진짜 놀랍게도 예전 답안과 똑같이 썻다

기억력이 좋은건지, 발전이 없는건지..ㅎ;

[개쩌는답](https://programmers.co.kr/learn/courses/30/lessons/12916/solution_groups?language=javascript)
```js
function numPY(s){
  //함수를 완성하세요
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;

    // 'P'를 기준으로 자른 배열, 'Y'를 기준으로 자른 배열 
    // 각 문자열의 갯수가 같으므로 배열의 길이가 같다

    // return 에 연산자로 들어가있거 굳이 불리언값을 넘겨주지 않아도 됨 
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( numPY("pPoooyY") )
console.log( numPY("Pyy") )

// 굳이 변수선언 안해도 간편하게 함수 값 확인 가능
```
