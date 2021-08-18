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

### git Access Token

1. 우측 상단 Profile > Settings
2. 좌측 메뉴 Developer settings > Personal access tokens
3. Generate new token 클릭
4. Note, Expiration, Select scopes 설정 후 Generate token
5. 토큰 생성 후 자격증명 pw 부분에 토큰 기입

[참고 블로그](https://firstquarter.tistory.com/299#comment17037168)

---

## How to git fork❓

`PR`  "내 작업을 `merge`해줘!" 라고 요청을 보내는것

`merge` 는 작업과 작업을 합치는 것

1. fork
2. clone
3. creat branch 
4. add, commit, push
5. pull request

---

## Managing branch

### 현재 내가 위치한 branch 확인
```
$ git branch -r
```

### 원격 저장소의 branch 확인
```
$ git branch -r
```

### 브랜치 생성하기
```
$ git branch <branch name>
```

### 생성한 branch로 이동
```
$ git checkout <branch name>
```