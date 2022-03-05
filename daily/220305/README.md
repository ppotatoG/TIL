# SA demo-react

## [React 플러그인 config 충돌 해결법](https://velog.io/@lamknh/React-%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8-config-%EC%B6%A9%EB%8F%8C-%ED%95%B4%EA%B2%B0%EB%B2%95)

```
$ npm uninstall babel-eslint
$ npm install eslint@4.x babel-eslint@8 - g
```

## json

`name` 프로젝트 이름? 폴더 이름 (필수)
`version` 배포 시 필요한 버전.....?(필수)
`dependencies` 설명을 문자열로 기술, npm search로 검색된 리스트에 표기되기 때문에 ... 구글스크립트?
`main`으로 지정 된 모듈의 객체가 반환됨, index.html과 같은 역할

```js
{
  "name": "demo-react",
  "version": "0.1.0",
  "description": "",
  "main": "index.js",
  "author": "sohyun",
  "license": "ISC"
} 
```

`npm start`를 사용하기 위함

이거랑 비슷하게..
```
"scripts": {
    "dev": "next"
},
```

```js
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
```

[[NodeJS] 모두 알지만 모두 모르는 package.json](https://programmingsummaries.tistory.com/385)