# iterable, iterator, generator

[Symbol.iterator] 메소드를 가지고 있다 === iterable하다

1. Array.from 메소드로 배열로 전환 가능
2. spread operator로 배열로 전환 가능
3. 해체할당 가능
4. for ... of 명령 수행 가능
5. `Promise.all`, `Promise.race` 명령 수행 가능
6. `generator - yield*` 문법으로 이용 가능
