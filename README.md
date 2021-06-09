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

### 부스트캠프 자가진단 문제풀이

[자가진단 네이버 블로그](https://blog.naver.com/boostcamp_official/221978031932)

```
const obj = {};
const arr = [2, 5, 4, 6, 5, 8, 8, 9, 0, 9, 0, 3, 0, 6, 7, 3, 6, 8, 0, 6, 8, 9, 2, 5, 7, 9, 5];
for ( const num of arr ) { // 6번 반복하는 반복분 (arr.length = 6)
    
    if(obj[num] == undefined ){
        obj[num] = 1;
    } else {
        obj[num] += 1
    }
}
for(let i = 0; i < 10; i ++){ // 마지막에 한번만 해도 되기 때문에 바깥으로 뺀 중복문
    if (obj[i] == undefined) obj[i] = -1
}
console.log(obj)
// {0: 4, 1: -1, 2: 2, 3: 2, 4: 1, 5: 4, 6: 4, 7: 2, 8: 4, 9: 4}
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