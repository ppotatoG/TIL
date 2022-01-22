# react `styled-components`

## CSS in JS

스타일 정의를 CSS 파일이 아닌 JavaScript로 작성된 `컴포넌트에 바로 삽입`하는 스타일 기법

## install
```
$ npm i styled-components
```

설치 후 `package.json`에 추가됨

```
"dependencies": {
    "react": "^16.8.0",
    "react-dom": "^16.8.0",
    "styled-components": "^4.3.2"
},
```

## 기본 문법

Styled Components로 작성된 JavaScript 코드
```js
import styled from "styled-components";

styled.button`
  font-size: 1rem;
`;
```

아래 CSS 코드가 적용된 button 태그를 만들어낸다

```css
button {
  font-size: 1rem;
}
```

## 고정 스타일링
Styled Components 문법을 이용해서 간단하게 React로 작성된 버튼 컴포넌트를 스타일링 해보기

`<button>` 엘리먼트에 원하는 스타일을 적용한 후 `StyledButton 변수에 저장`합니다.

```js
import React from "react"; // import react 
import styled from "styled-components"; // import? styled-components

//StyledButton라는 변수로 스타일이 추가된 버튼 앨리먼트 선언
const StyledButton = styled.button` 
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  color: gray;
  backgroud: white;
`;

// 선언한 StyledButton를 사용하기 위한.. 함수인가?
function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}
```

사용방법
```js
import Button from "./Button"; // 함수 가져오기?

// 함수에선 StyledButton로 컴포넌트 만들고 여기선 Button으로 만든다??
<Button>Default Button</Button>; 
```

[[React] Styled Components 사용법](https://www.daleseo.com/react-styled-components/)

# next styled-components

1. `npm`대신 `yarn`?
2. `.babelrc`?


```js
import React from 'react';
import styled from 'styled-components'; // stlyed-components를 불러온다
// styled. 뒤에 자신이 사용하고 싶은 jsx tag를 입력한다. 현재 코드에서 TestDiv라는 변수로 div처럼 이용 가능하다. 그 밑에 css 코드를 적는다.

const TestDiv = styled.div`
    background : yellow;
    & div {
        color : red;
        & span {
            color : blue;
        }
    }
`;
const Test = () => {
  return (
    <TestDiv>
      <div>
        반갑습니다.
        <div>
          <span>안녕하세요</span>
        </div>
      </div>
    </TestDiv>
  );
};

export default Test;
```

[styled-components 사용 및 Next.js 에서 SSR](https://velog.io/@ansrjsdn/styled-components-%EC%82%AC%EC%9A%A9-%EB%B0%8F-Next.js-%EC%97%90%EC%84%9C-SSR)


## 현재 내가 사용한 방식

`import`는 다른사람들과 같다

선언이 다르다 `.`이랑 `()`?

뭐가 다른거지?
```js
// import
import styled from 'styled-components';

// 선언
const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

// 사용
<SearchInput enterButton />
```

여태 봤던 예제는 보통

1. 변수선언

```js
const styled.div(태그이름)
```

2. 함수 선언

```js
const Test = () => { // 함수 이름
  return ( // 컴포넌트 생성(함수이름과 다름)
    <TestDiv> 
      <div>
        반갑습니다.
        <div>
          <span>안녕하세요</span>
        </div>
      </div>
    </TestDiv>
  );
};
```

3. 함수 내보내기

```js
export default Test;
```

4. 컴포넌트로 사용하기

여기서는 `styled()`로 사용하네?

나랑 같은 형식인데 나는 저 위가 없는걸로 기억하거든

그럼 저 위를 만들어줘야 하는거 아님?

인강에는 저 내용이 없었는데 ??????????????

아닌가 있었는데 내가 기억을 못하는건가 ?????????????????

```js
import styled from 'styled-components';
import { Button } from 'antd';

const TestDiv = styled(Button)`
    background : yellow;
`;
```

(styled-components Github)[https://github.com/styled-components/styled-components]