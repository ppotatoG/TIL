## Today, I learned

## How to github submodule

add
``` 
git submodule add (repository url)
```

first push
``` 
git push origin master

```
submodule remove


```
git rm --force --cached bxsliderSample
```
```
.gitmodules 메모장 내에서 삭제시킬 서브모듈 정보 삭제
```
```
git add .
git commit -m "message"
git push
```

git submodule update
```
git submodule update --recursive

git submodule update --remote Arduino/

git add Arduino

...

```
---

<br>

### git bash push 반응 없음

사용자 연결
1.  제어판 / 모든 제어판 항목 / 자격 증명 관리자
2. 최하단 일반 자격 증명 추가
3. 인터넷 또는 네트워크 주소 : git:https://github.com
4. ppotatoG, pw
5. 후에 bash 내에서 push

<br>

### programmers

[github](https://github.com/ppotatoG/TIL/tree/master/programmers)

언제 해보지 하다가 네이버 자가진단 문제로 자존감을 얻어 시작
```
var solution=(_,$)=>_.find(_=>!$[_]--,$.map(_=>$[_]=($[_]|0)+1))
```

이 답안은 정말 존경스럽다,,,

<br>

### 부스트캠프 자가진단 문제풀이

[자가진단 네이버 블로그](https://blog.naver.com/boostcamp_official/221978031932)

```
function solution(list){
    for ( const num of list ) {    
        if(obj[num] == undefined ) obj[num] = 1;
        else obj[num] += 1
    }
    for(let i = 0; i < 100; i ++){
        if (obj[i] == undefined) obj[i] = -1
    }
    retrun obj
}

solution(list)
```
- 배열과 객체


### checkbox
[demo](https://ppotatog.github.io/TIL/checkbox)

- input 단일체크 기능
- 클릭된 this에 color 추가
- label 대신 checkbox를 사용하는 이유는 뭘까
<br><br>
### bxslider Sample

[demo](https://ppotatog.github.io/TIL/bxsliderSample/)
- bxslider 라이브러리를 사용한 샘플 페이지
- 결국 원하는건 만들지 못했다
<br><br>
### bigCursor

[demo](https://ppotatog.github.io/TIL/bigCursor/)

- box안에서 작동되는 짱 큰 커서 
- 사용하는 사람이 있을까?
<br><br>
### Arduino in web

[example01 demo](https://ppotatog.github.io/TIL/Arduino/example01)

- 아두이노 공부하는 공대친구 재미있어 보여서 만든 페이지
- 앞으로 친구 과제 할 때마다 추가 될 예정