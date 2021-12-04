# callback
feat. 콜백지옥 경험하기

## 콜백함수와 동기, 비동기

```js
console.log('1'); // 동기
setTimeout(() => console.log('2'), 1000); // 비동기
console.log('3'); // 동기

function fnc1(print) {
    print();
}
fnc1(() => console.log('hello')); // 동기

function fnc2(print, timeout){
    setTimeout(print, timeout);
}
fnc2(() => console.log('async callback'), 2000); // 비동기

/*
1
3
hello
async callback
*/
```

## 콜백함수와 class로 함수 구현하기

아래 코드로 1 ~ 3 내용 구현하기

1. 유저의 id와 password 받아오기
2. 받아온 값으로 로그인하기
3. 로그인된 값으로 팀 반환하기
```js
class UserStorage {
    loginUser(id, pw, onSuccess, onError) {
        setTimeout(() => {
            if(
                (id === 'Id' && pw === 'password') ||
                (id === 'hackers' && pw === '1234')
            ) {
                onSuccess(id);
            }
            else {
                onError(new Error('not found'));
            }
        }, 1000)
    }

    getTeam(user, onSuccess, onError) {
        setTimeout(() => {
            if(user === 'Id') {
                onSuccess({
                    name : 'Pro',
                    team : 'web development'
                });
            }
            else if(user === 'hackers') {
                onSuccess({
                    name : 'hackers',
                    team : 'module'
                });
            }
            else {
                onError(new Error('no access'));
            }
        }, 1000)
    }
}
```

1. `prompt`로 유저의 정보 가져오기
```js
const userStorage = new UserStorage(); // class사용될 변수
const id = prompt('enter your id'); // prompt user id
const password = prompt('enter your password'); // prompt user password
```

2. class에서 선언된 loginUser안에 인자 id, pw, onSuccess, onError 선언
```js
const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(
    id, // id
    password, // pw
    user, // onSuccess
    error // onError
)
```

3. getTeam을 사용해 팀 반환하기
```js
const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(
    id, 
    password, 
    user => {
        userStorage.getTeam(
            // getTeam의 인자 user, onSuccess, onError
            user, // user

            // onSuccess
            userWidtteam => {
                alert(`Hello ${userWidtteam.name}, You're on the ${userWidtteam.team} team`)
            },

            // onError
            error => {
                alert(error);
            }
        )
    },
    error => {
        alert(error);
    }
)
```