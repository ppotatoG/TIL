# ts-error.zip

## TS2355

```js
TS2355: A function whose declared type is neither 'void' nor 'any' must return a value.
```

`return` 되는 값이 없는데 `return` 값이 `string`
```ts
const PasswordPattern = (text :  string) : string => {
    //
};
```

```ts
const EmailPattern = (text :  string) : string => {
    return text;
};
```