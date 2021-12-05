class UserStorage {
    loginUser(id, pw) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(
                    (id === 'Id' && pw === 'password') ||
                    (id === 'hackers' && pw === '1234')
                ) {
                    resolve(id);
                }
                else {
                    reject(new Error('not found'));
                }
            }, 1000);
        })
    }

    getTeam(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
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
                    reject(new Error('no access'));
                }
            }, 1000);
        })
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage
.loginUser(id, password)
.then(userStorage.getTeam)
.then(user => alert(`Hello ${user.name}, You're on the ${user.team}team`))
.catch(alert);