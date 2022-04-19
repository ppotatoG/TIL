import React, { memo, useEffect, useRef, useState } from 'react';

const Hooks = () => {
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

    const [inputVal, setInputVal] = useState('input test');
    const input = useRef();

    const onInputValChange = e => setInputVal(e.target.value);

    return (
        <div>
            <h2>{text}</h2>
            <h2>{num}</h2>
            <div>
                <button onClick={onNumBtn('+')}>+</button>
                <button onClick={onNumBtn('-')}>-</button>
            </div>
            <br/>
            <input type='text' value={inputVal} onChange={onInputValChange} ref={input}></input>
            <h1>{inputVal}</h1>
        </div>
    );
}

export default Hooks;