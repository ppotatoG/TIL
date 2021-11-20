// 다른 사람이 만들어 놓은 객체
const user = {
    name : '홍길동',
    lecture : '토익 환급반'
};

// 내가 작업
user.showName = function() {console.log(user.name)};

// 사용자가 접속하면 보는 메세지
for(let key in user) {
    console.log(`user ${key} is ${user[key]}`)
}