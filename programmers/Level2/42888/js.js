function solution(record) {    
    let user = record
    .map((val) => {
        val = val.split(' ');
        return val[0] === 'Enter' ? [val[1].slice(3), val[2]] : 0;
    })
    .filter((val) => val !== 0);

    let changeList = record
    .filter((val) => val.indexOf('Change') >= 0)
    .map((val) => val.split('Change uid')[1].split(' '));
    
    console.log(user)

    for(let i = 0; i < changeList.length; i++) {
        // changeList[i][0] // 유저의 id
        // changeList[i][1] // 유저의 닉네임

        // user내 유저의 id를 찾아 user[i][1] = changeList[i][1]
        // findIndex?
        console.log(changeList[i][0])
    }

    console.log(user)

    // while(changeList.length) {

    // }

    return record;
}
console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid1234 Muzi","Change uid4567 Ryan"]));
// ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]