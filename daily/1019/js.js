const arr = [
    ['오은희', ''],
    ['성윤영', ''],
    ['고정호', 357],
    ['남형태', 366],
    ['조은미', 372],
    ['한유빈', 355],
    ['문지희', 368],
    ['정승용', 364],
    ['유석진', 362],
    ['배대영', 363],
    ['문용수', ''],
    ['이규영', 359],
    ['고재성', 363]
]

function list(arr){
    for(val of arr){
        let name = val[0];
        let tmp = val[1];

        typeof(tmp) === 'string'? tmp = '연차' : tmp = tmp/10;

        let newP = document.createElement('p')
        let text = document.createTextNode(name + ' : ' + tmp);

        newP.appendChild(text);
        document.body.appendChild(newP);
    }
    // return arr.map((val) => val[1] === ' ' ? [val[0],'연차'] : val)
}

function red(arr){
    let newArr = [];
    for(val of arr){
        let name = val[0];
        let tmp = val[1];

        if(tmp >= 370) newArr.push(name);
    }
    let newP = document.createElement('p')
    let text = document.createTextNode(`-> 특이사항(37도 이상) :  ${newArr.join(', ')}`);

    newP.appendChild(text);
    document.body.appendChild(newP);
    
    // return arr.filter((val) => val[1] >= 370).map((val) => val[0]);
}
function not(arr){
    let newArr = [];

    for(val of arr){
        let name = val[0];
        let tmp = val[1];

        if(typeof(tmp) === 'string') newArr.push(name);
    }
    let newP = document.createElement('p')
    let text = document.createTextNode(`● 점검 미진행자 (직책생략) : ${newArr.join(', ')}`);

    newP.appendChild(text);
    document.body.appendChild(newP);
}

let today = new Date();   
document.write(`[${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일 체온점검]`)
document.write(`<br><br>● 팀 (총 직원 ${arr.length}명)`)
document.write('<br><br>● 점검 대상자 (직책생략)')
list(arr);
red(arr);
not(arr);