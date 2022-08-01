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

## TS2339

```js
TS2339: Property 'email' does not exist on type 'object'.
```

```ts
const validate = (type: string, values : object) => {
    // ...
}
```

```ts
interface errors {
    email: string | '';
    password: string | '';
}

const validate = (type: string, values : errors) => {
    // ...
}
```