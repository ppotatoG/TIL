# 인프런 스크롤을 이용한 인터렉션 구현

## css selector
`__stiky` 를 포함한 class일 때 css 추가

`*=` , `^=`, `$=`가 안먹인다 왜 안되지ㅜㅜ

[MDN css selector](https://developer.mozilla.org/ko/docs/Web/CSS/Attribute_selectors)

부모가 `section`이 아니라 `.section`여서 안됐던거였다!ㅎ;;;

### `[attr~=value]` 특성값이 정확이 `value`인 요소 
### `[attr|=value]` attr이라는 특성값을 가지고 있으며, 그 특성값이 `정확히 value`이거나 `value로 시작`
### `[attr^=value]` attr이라는 특성값을 가지고 있으며, `접두사로 value가 값에 포함`되어 있으면 이 요소를 선택합니다.
### `[attr$=value]` attr이라는 특성값을 가지고 있으며, `접미사로 value가 값에 포함`되어 있으면 이 요소를 선택합니다.
### `[attr*=value]` attr이라는 특성값을 가지고 있으며, `값 안에 value라는 문자열이 적어도 하나 이상 존재`한다면 이 요소를 선택합니다.