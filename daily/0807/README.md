# 210806

## 회원가입 폼 만들기

### 유저 이름 받아오기
- 두글자 이상
- 영어, 숫자 입력시 error

[정규식 블로그 글](https://codingbroker.tistory.com/119)

`const regex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/;`

- ㄱ ~ ㅎ
- 가 ~ 힣(자음 + 모음 중 가장 첫과 끝)
- a ~ z
- 0 ~ 9

자음 + 모음 조합으로 두글자 이상만 true 반환

```js
dd false
Name false
ㅇㅇㅇ false
홍 false
홍길 true
홍길동 true
홍길동. false
```