# 멀티미디어 홈페이지 만들기

## [html details](https://developer.mozilla.org/ko/docs/Web/HTML/Element/details)

웹에서 자주 쓰이는 토글박스를 js 없이 사용 가능한 앨리먼트

좌측 메뉴에 사용

<details class="nav-item" open>
    <summary class="ico-wrap">magazine<i class="ico arrow"></i></summary>
    <a href="#;">2021.04</a>
    <a href="#;">2021.06</a>
    <a href="#;">2021.08</a>
    <a href="#;">2021.10</a>
    <a href="#;">2021.12</a>
    <a href="#;">2022.02</a>
    <a href="#;">2022.04</a>
    <a href="#;">2022.06</a>
</details>

```html
<details class="nav-item" open>
    <summary class="ico-wrap">magazine<i class="ico arrow"></i></summary>
    <a href="#;">2021.04</a>
    <a href="#;">2021.06</a>
    <a href="#;">2021.08</a>
    <a href="#;">2021.10</a>
    <a href="#;">2021.12</a>
    <a href="#;">2022.02</a>
    <a href="#;">2022.04</a>
    <a href="#;">2022.06</a>
</details>
```

## [css position: sticky](https://developer.mozilla.org/ko/docs/Web/CSS/position)

`position: sticky;`를 사용하여 좌측 메뉴 고정

```css
.nav {
    position: sticky;
    top: 0;
    max-height: 100vh;
}
```

## [new Audio()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement)

`new Audio()`객체를 사용하여 컨텐츠 우상단 mp3 플레이어 제작

`player`객체 선언하여 내부적으로 변수 및 함수 사용