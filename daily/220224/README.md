# Sa update (윤군 pr)

## npm배포, 소스 관리를 위해 rollup사용

[npm rollup](https://www.npmjs.com/package/rollup)

[webpack VS rollup](https://flamingotiger.github.io/frontend/DevEnv/rollup-setup/)

## init 이유

[[web]브라우저가 웹페이지를 그리는 법](https://isme2n.github.io/devlog/2017/07/06/browser-rendering/)

### vue 대응

addEventListener('scroll')후에 생성되는 앨리먼트에 sa사용 원함

[진입/진출 그리고 리스트 트랜지션](https://kr.vuejs.org/v2/guide/transitions.html)

이는 vue뿐만 아닌 Document.createElement(), .append(), ... 에서도 사용됨

removeEventListener 후 addEventListener 로 초기화 시

once=false 로 되어있는 엘리먼트에도 재적용되는 부분 확인 필요