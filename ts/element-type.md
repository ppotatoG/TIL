# element-type.zip

## React 에서 Ts 사용시

```js
// vanilla
HTMLTextAreaElement

// tsx
React.KeyboardEvent<HTMLTextAreaElement>
```

## TS2339

`HTMLTextAreaElement`

text 등을 반환하는? 엘리먼트

error
```ts
TS2339: Property 'value' does not exist on type 'EventTarget & HTMLElement'.
```

use
```js
HTMLTextAreaElement
```

## TS2322

error
```js
TS2322: Type '(e: React.ChangeEvent<HTMLInputElement>) => Promise<void>' is not assignable to type 'FormEventHandler<HTMLFormElement>'.
```

use
```js
const onSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
```
```js
const onSubmit = async ( e: React.FormEvent<HTMLFormElement> ) : Promise<void> => {
```