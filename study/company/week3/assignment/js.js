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
                    name : 'Id',
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

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(
    id, 
    password, 
    user => {
        userStorage.getTeam(
            user, 
            userWidtteam => {
                alert(`Hello ${userWidtteam.name}, You're on the ${userWidtteam.team}team`)
            },
            error => {
                alert(error);
            }
        )
    },
    error => {
        alert(error);
    }
)
