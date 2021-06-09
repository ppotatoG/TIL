const obj = {};
const testArr = Math.floor(Math.random()*100)
const list = [testArr]
let n = 0

while( n < 100){ // 랜덤 난수 배열
    n++
    const testArr = Math.floor(Math.random()*100)
    list[n] = testArr
}

function solution(l){ // function solution()
    for ( const num of l ) {    
        if(obj[num] == undefined ){
            obj[num] = 1;
        } else {
            obj[num] += 1
        }
    }
    for(let i = 0; i < 100; i ++){
        if (obj[i] == undefined) obj[i] = -1
    }

    console.log(obj)
}

solution(list)