# Github

## How to github submodule❓

add
``` 
$ git submodule add (repository url)
```

first push
``` 
$ git push origin master

```
submodule remove


```
$ git rm --force --cached bxsliderSample
```
```
.gitmodules 메모장 내에서 삭제시킬 서브모듈 정보 삭제
```
```
$ git add .
$ git commit -m "message"
$ git push
```

$ git submodule update
```
$ git submodule update --remote <file>

$ git add <file>

...

```
---

## How to github❓

### commit 내리기
commit을 취소하고 해당 파일들은 unstaged 상태로 워킹 디렉터리에 보존

[참고 포스팅](https://gmlwjd9405.github.io/2018/05/25/git-add-cancle.html)
```
$ git reset --mixed HEAD^ 
```

### commit message 변경하기
```
$ git commit --amend
```
- 열리는 파일에 새로운 커밋메세지 작성하기
- 저장 후 파일 종료하면 커밋메세지 변경 완료 !


### commit 취소하는건 줄 알았는데 되돌리기였다 조심하자..
```
$ git restore <file>...
```

### git add 내리기
```
$ git reset HEAD <file>...
```

### git bash push 반응 없음

사용자 연결 하기!
1.  제어판 / 모든 제어판 항목 / 자격 증명 관리자
2. 최하단 일반 자격 증명 추가
3. 인터넷 또는 네트워크 주소 : git:https://github.com
4. ppotatoG, pw
5. 후에 bash 내에서 push

### git 되돌리기

#### 로컬 변경사항 실행취소하기
```
$ git checkout -- <잘못 저장된 파일 이름>
```