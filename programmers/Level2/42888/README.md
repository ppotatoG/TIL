# 오픈채팅방

[programmers](https://programmers.co.kr/learn/courses/30/lessons/42888)


## 첫번째 

막상 글로 쓸라니까 또 힘드네;;

record를 돌며, Leave를 제외하고 `user`에 담아야 할 것 같다...

음 그러니까 여기에 딱 `Set`을 쓰면 좋을 것 같음

Enter, Change로 동일한 uid에서 닉네임은 계속 변경이 되니까..?

```js
function solution(record) {    

    // 들어온 유저
    let user = record
    .map((val) => {
        val = val.split(' ');
        return val[0] === 'Enter' ? [val[1].slice(3), val[2]] : 0;
    })
    .filter((val) => val !== 0 && val);

    // 닉네임을 변경한 유저
    let changeList = record
    .filter((val) => val.indexOf('Change') >= 0)
    .map((val) => val.split('Change uid')[1].split(' '));
    
    for(let i = 0; i < changeList.length; i++) {
        const idx = user.findIndex(val => val[0] === changeList[i][0]);        
        user[idx][1] = changeList[i][1]
    }

    return record;
}
console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]));
// ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]
```