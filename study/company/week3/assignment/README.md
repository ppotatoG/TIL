# week3

```js
class UserStorage {
    loginUser(id, pw) {
        // return 값 Promise로 변경 
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(
                    (id === 'Id' && pw === 'password') ||
                    (id === 'hackers' && pw === '1234')
                ) {
                    // user정보랑 일치할 시 resolve(id)반환
                    resolve(id);
                }
                else {
                    // user정보 불일치, reject로 오류 반환
                    reject(new Error('not found'));
                }
            }, 1000);
        })
    }

    getTeam(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                /// resolve로 받아온 id
                if(user === 'Id') {
                    resolve({
                        name : 'Id',
                        team : 'web development'
                    });
                }
                else if(user === 'hackers') {
                    resolve({
                        name : 'hackers',
                        team : 'module'
                    });
                }
                else {
                    // 받아온 정보가 없을 때
                    reject(new Error('no access'));
                }
            }, 1000);
        })
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage  // new UserStorage()
.loginUser(id, password) // loginUser에 id, password 전달
.then(userStorage.getTeam) // resolve시 getTeam

// getTeam내용 가공 후 반환
.then(alert(`Hello ${user.name}, You're on the ${user.team} team`))
.catch(alert); // 오류, alert반환
```