function solution(record) {    
    const userList = {};
    const status = [];

    record = record.map(val => val.split(' '));

    for (let i = 0; i < record.length; i++) {
        if(record[i][0] !== 'Leave') {
            userList[`${record[i][1].slice(3)}`] = record[i][2]
        }
    }

    for (let i = 0; i < record.length; i++) {
        const uid = record[i][1].slice(3);
        if(record[i][0] === 'Enter') {
            status.push(`${userList[uid]}님이 들어왔습니다.`)
        }
        else if(record[i][0] === 'Leave') {
            status.push(`${userList[uid]}님이 나갔습니다.`)
        }
    }

    return status;
}
console.log(solution(["Enter uid1234 Muzi","Enter uid4567 Prodo","Enter uid234 Admin","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan","Change uid4567 User","Leave uid4567"]));
/*
"Enter uid1234 Muzi"
"Enter uid4567 Prodo"
"Leave uid1234"
"Enter uid1234 Prodo"
"Change uid4567 Ryan"
*/
// ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."] 