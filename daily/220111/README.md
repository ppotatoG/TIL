# 스터디 필기내용 정리

## node

개발 `환경`

## npm

`Node Packaged Manager`

`Node.js`로 만들어진 `pakage(module)을` `관리`해주는 툴

## yarn 

페이스북에서 만든 `자바스크립트 패키지 매니저`

- `npm`과 `같은 기능`을 수행
- yarn이 조금 더 `가볍다`
- npm의 `단점`(속도(performance), 안정성(stability), 보안성(security))을 `향상`시키기 위해 만들어진 매니저 툴

## package.json

- 배포한 모듈 정보를 담고자 만들어졌다.
- 기본적으로 CommonJS의 명세를 충실히 따르고 있으며 JSON 형식의 파일이다.
- 직접 작성할 수도, npm init 명령을 통해서 자동으로 생성할 수도 있다.

[[Node.js] package.json 파일이란?](https://velog.io/@leyuri/Node.js-package.json-%ED%8C%8C%EC%9D%BC%EC%9D%B4%EB%9E%80)

## package-lock.json

- package.json 만으로는 정보가 부족
- 같은 package.json 을 사용해서 npm install 을 진행하더라도 서로 다른 node_modules를 생성하는 경우가 발생

### 왜 package.json 과 package-lock.json 으로 나눠둔 걸까요?

만약 `package.json`에 `패키지 버전을 콕 찝어 정해`놓는다면,

프로젝트에서 사용하고 있는 패키지의 중요한 `버그 수정이 이루어질 때 마다 프로젝트의 package.json 에 적혀있는 버전도 수정해`주어야하기 때문입니다.

모든 크고 작은 패키지들의 릴리즈에대해 항상 추적하고 수정해야하는 엄청난 귀찮음과 수고스러움을 `version range`가 해결해주고 있었습니다.

[package-lock.json이란?](https://junwoo45.github.io/2019-10-02-package-lock/)

## TypeScript

자바스크립트의 슈퍼셋(상위확장)인 오픈소스 프로그래밍 `언어`

- 높은 수준의 코드 탐색과 디버깅
- 자바스크립트 호환
- 강력한 생태계
- 점진적 전환 가능

[활용도가 높아지는 웹 프론트엔드 언어, 타입스크립트(TypeScript)](https://www.samsungsds.com/kr/insights/TypeScript.html)

## react

- 자바스크립트 `라이브러리`
- 사용자 `인터페이스를` 만들기 위해 사용
- `싱글 페이지 애플리케이션`이나 `모바일 애플리케이션` 개발에도 사용

### import

```js
// 파일, 설정, 컴포넌트를 외부 파일이나 모듈에서 가져올 때
import 이름 from 위치

// 가져오는 것이 json 형태인지, default 가 붙었는지 등에 따라 (템플릿 리터럴?)
import { 이름 } from 위치

// 위치에 있는 모든 것을 갖고 올 수 있습니다.
import * from 위치

// as 문법을 통해 이름을 임의로 설정
import * as 이름 from 위치
import { default as 이름 } from 위치
``` 

### export
```js
// 객체나 함수를 모듈화 시켜 내보낼 때 
export { 객체 }
import { 객체 } from 위치

// 객체의 이름을 유지한 채 내보냄
export default 객체
import { default as 객체 } from 위치
import 객체 from 위치

// 객체의 이름을 임의로 설정, export는 선언문과 한꺼번에 쓸 수 있음
export const 컴포넌트 = () => { return <></> }
export default class 컴포넌트 extends React.Component {}

export const 함수 = () => {}
export default function 함수 () {}

// export 에 from을 붙이면, 특정 위치서 가져온 파일을 내보냄
export { 객체 } from 위치
```

[import / export](https://hyogeun-android.tistory.com/entry/7-React-%ED%8C%8C%EC%9D%BC-%EA%B5%AC%EC%A1%B0-import-export)

## NEXT.js

`Node.js를 기반으로 구축`된 오픈 소스 개발 `프레임워크`

~~좋은것만 모아놓은 프레임워크~~

[Next.js를 사용하는 이유](https://ivorycode.tistory.com/19)

## config ?

configure 스크립트는 개발 중인 프로그램을 각기 다른 수많은 컴퓨터들에서 실행하고 도와주도록 설계된 실행 스크립트이다. 

소스 코드로부터 컴파일하기 직전에 사용자 컴퓨터의 라이브러리의 존재 여부를 확인하고 연결시킨다

[Configure 위키백과](https://ko.wikipedia.org/wiki/Configure)

## 틸드(~), 캐럿(^)

```
Major.Minor.Patch
```

[버전표기법](https://jujupapa.tistory.com/80)

[npm semver - 틸트 범위(~)와 캐럿 범위(^)](https://velog.io/@slaslaya/npm-semver-%ED%8B%B8%ED%8A%B8-%EB%B2%94%EC%9C%84%EC%99%80-%EC%BA%90%EB%9F%BF-%EB%B2%94%EC%9C%84)