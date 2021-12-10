# 오픈채팅방

[programmers](https://programmers.co.kr/learn/courses/30/lessons/42888)


## 제출한 답
```js
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
```

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

### 두번째

이 맛에 알고리즘 하지 하면서 신나게 풀고 32개중에 2개 통과

중복문을 줄이고... for대신 forEach를 써보자

근데 이건 런타임에 대한거지 값은 문제가 안될텐데 흐음;

```js
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
```

[reduce쓰는거 겁나 간지난다](https://programmers.co.kr/questions/20014)

### 세번째

아무리봐도 문제될게 없어보이는데 통과가 안된다..

```js
function solution(record) {    
    const userList = {};
    const status = [];

    record = record.map(val => val.split(' '));

    for (let i = 0; i < record.length; i++) {
        const uid = record[i][1].slice(3);
        const name =  record[i][2]

        // 유저 정보
        if(record[i][0] !== 'Leave') {
            userList[uid] = name
        }

        // 유저 상태
        if(record[i][0] === 'Enter') {
            status.push([uid, 'Enter'])
        }
        else if(record[i][0] === 'Leave') {
            status.push([uid, 'Leave'])
        }
    }

    return status
    .map(val => {
        const status = val[1];
        const uid = val[0]
        if(status === 'Enter') {
            return `${userList[uid]}님이 들어왔습니다.`
        }
        else if(status === 'Leave') {
            return `${userList[uid]}님이 나갔습니다.`
        }
    });
}
```

`.slice(3)`이 문제였다,, `uid`가 공통으로 들어가는 줄 알았지 나는ㅠ