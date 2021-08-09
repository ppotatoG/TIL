# match()

### [match](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/match)

match() 메서드는 문자열이 정규식과 매치되는 부분을 검색합니다

```js
const match = saNode.dataset.sa.match(/from-(.*)/);

if(match) {}

```
[sa에서 사용](https://github.com/ppotatoG/sa/blob/main/js/sa.js)

'from-'으로 시작할 때 조건문 실행
- mdn 내용이 너무 어려우니 나중에 더 읽어보기

---
[match 사용 포스팅](https://blog.naver.com/thgus2270/222461706919)

`/[가-힣]{2,}/ 로 하면 2글자 이상에 대해서 매칭시킬 수 있으니 if ( match ) 한 번만 조건 걸면 value.length >= 2 안 해도 돼요.`

```js
const nameLabel = document.querySelector('label[for=user-name]');
const regex = /^[가-힣]{2,}/;

nameLabel.addEventListener('change', (e) => {
    const value = e.target.value;

    if(value.match(regex) && value.length >= 2) console.log(value + ' ' + true);
    else console.log(value + ' ' + false);
})
```