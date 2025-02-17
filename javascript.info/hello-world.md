# Hello, world!

## HTML4

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
  <title>HTML4 Example</title>
</head>
<body>
  <script type="text/javascript" language="javascript"><!--
    console.log("HTML4 style")
  --></script>
</body>
</html>
```

**특징**
- `<script type="text/javascript">`로 자바스크립트 명시
- `language="javascript` "로 스크립트 언어 지정
- 구버전 브라우저 호환 위해 <!-- ... --> 주석 사용
- 브라우저마다 JS 파싱 다를 수 있어 안전차원으로 명시

**장점**
- 당시 표준으로 모든 브라우저가 인식
- 문제 발생 시 주석으로 코드 차단 가능

**단점**
- 많은 불필요 속성 (type, language)
- 주석 기법 유지보수 불편
- 현대 브라우저엔 불필요한 구문 많음

## HTML5

```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>HTML5 Example</title>
</head>
<body>
  <script>
    console.log("HTML5 inline")
  </script>
  <script src="app.js"></script>
</body>
</html>
```

**특징**
- <script> 태그만 써도 자바스크립트로 인식
type="text/javascript" 등 생략 가능
- language 속성도 사용 안 함
- 구버전 브라우저용 주석 제거, 간단해진 문법

**장점**
- 코드가 간결
- 유지보수 편리
- 모든 최신 브라우저에서 표준 지원

**단점**
- 스크립트가 많은 경우 로드 순서 주의 (동기 로드)
- 레거시 브라우저(아주 옛 IE 등) 지원 시 폴리필 필요

## ES Modules (ESM)
```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>ESM Example</title>
</head>
<body>
  <script type="module">
    import { sayHi } from "./module.js"
    sayHi()
  </script>
</body>
</html>
```

**특징**
- type="module"로 ESM 사용
- import/export로 코드 분리와 재사용
- <script type="module">는 문서 파싱 후 자동 지연 로드 (defer 유사)
- 중복 모듈 로딩 방지, 동적 import 가능

**장점**
- 네임스페이스 분리로 충돌 최소화
- 필요한 기능만 모듈 단위로 관리
- 최신 브라우저와 Node.js가 기본 지원
- 최적화 도구 사용 시 트리 쉐이킹 (필요한 코드만 번들)

**단점**

구형 브라우저(IE 등)에서는 ESM 직접 지원 안 함
레거시 지원 시 번들링, 트랜스파일링 필요
import/export를 지원하지 않는 환경에선 폴리필 사용


[이제부턴 ESM 뿐입니다](https://news.hada.io/topic?id=19157)