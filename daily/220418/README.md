### menu 내 label checked로 box filter 기능 사용하기

[hooks 참고](https://minaminaworld.tistory.com/194)

`const [text, setText] = useState('num test');`

`const [num, setNum] = useState(0);`

- 기본값 0?
- html 태그 내 값은 `text, num`으로 해놓은걸 봐서.. 배열?의 첫번째 값은 세팅된 값인듯? 유저가 볼 값?
- `setText, setNum`로 `text, num`를 바꾼다 함수처럼...
```js
const [text, setText] = useState('num test');
const [num, setNum] = useState(0);
const onNumBtn = (sign) => () => {
    if (sign === '+') {
        setText('증감');
        setNum((pre) => {
            return pre + 1;
        });
    }
    else {
        setText('감소');
        setNum((pre) => {
            return pre - 1;
        });
    }
};
```

```html
<h2>{text}</h2>
<h2>{num}</h2>
<div>
    <button onClick={onNumBtn('+')}>+</button>
    <button onClick={onNumBtn('-')}>-</button>
</div>
```