# 인프런 스크롤을 이용한 인터렉션 구현

## html
- 동영상을 프레임별로 잘라 스크롤에 따른 n번째 이미지 노출 - 스톱모션 처럼!
- `<canvas>`를 사용해 조작.. 이건 전부 이해 못함

## js
- `document.querySelector('.section-text__sticky:nth-child(2)')` 이딴식으로 해놓는 바람에 canvas를 추가하니 얘도 같이 스크롤에 따라 opacity가 변경된다

인강 문법 맘에 안들어서 내 맘대로 했는데, 이런 부분들이 정말 힘들다

- `section-text__canvas`로 `canvas`를 추가했는데 `document.querySelector('.section-text__sticky:nth-child(2)')`에서 null이 나온다

```js
document.querySelector('.section-text__sticky:nth-child(2)')
// null
document.querySelector('.section-text__sticky:nth-child(1)')
// null
document.querySelectorAll('.section-text__sticky')
// NodeList(4) [p.section-text__sticky, p.section-text__sticky, p.section-text__sticky, p.section-text__sticky]
document.querySelector('.section-text__sticky:first-child')
// null
```

- 근데 `:nth-child(n)`없이 All한 후에 인덱스값으로 줘도 되지 않나?!

- `new Image()` ?
- `Math.round` ?

## css
1. `nav`는 최상위에 존재해야 한다
2. `canvas`는 `sticky`보다 뒤에 있어야 한다
3. `z-index`는 n+1이 아닌 9999 .. 로 해야 한다 들었다(어디서 들은것만 많아서)

nav : 99, sticky에는 9를 주자

- `canvas`에 visivility 추가

두시간 내내 오류의 늪에 빠져서 더이상은 못하겠다