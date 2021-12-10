function solution(record) {    
    const userList = {};
    const action = [];

    for (let i = 0; i < record.length; i++) {
        const thisUid = record[i].split(' ')[1];
        const thisName =  record[i].split(' ')[2];
        const thisAction = record[i].split(' ')[0];

        if(thisAction === 'Enter') {
            userList[thisUid] = thisName
            action.push([thisUid, thisAction])
        }
        else if(thisAction === 'Leave') {
            action.push([thisUid, thisAction])
        }
        else if(thisAction === 'Change') {
            userList[thisUid] = thisName;
        }
    }

    return action
    .map(val => {
        const status = val[1];
        const uid = val[0]
        if(status === 'Enter') {
            return `${userList[uid]}님이 들어왔습니다.`
        }
        else {
            return `${userList[uid]}님이 나갔습니다.`
        }
    });
}
console.log(solution(["Enter uid1234 Muzi","Enter uid4567 Prodo","Enter uid234 Admin","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan","Change uid4567 User","Leave uid4567"]));
/*
"Enter uid1234 Muzi"
"Enter uid4567 Prodo"
"Enter uid234 Admin"
"Leave uid1234"
"Enter uid1234 Prodo"
"Change uid4567 Ryan"
"Change uid4567 User"
"Leave uid4567"

1234 Prodo
234 admin
4567 user


*/
// ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."] 