let list01 = [1, 2, 2, 3, 3, 3, 3, 4, 4].reverse();
let list02 = [3, 2, 4, 4, 2, 5, 2, 5, 5, 6, 6, 6, 7, 7, 7, 8,8,8]
let list03 = [3, 5, 7, 9]

function solution(l){

    const arr = [] // 요소만 수정 돼지꼬리땡야
    let answer = [] // 재할당 돼지꼬리땡야

    for(let i = 0; i < l.length; i++){ // list 중 중복제거한 배열 만들기
        if(l.indexOf(l[i]) == i) {
            arr.push(l[i])
            answer.push(0)
        }
    }

    arr.sort((a, b) => a == b ? 0 : a > b ? 1: -1 )

    for(num in l) {
        const idx = arr.indexOf(l[num])
        answer[idx] += 1
    }

    answer = answer.filter((a) => a !== 1)

    console.log(answer)
}

solution(list01) 
solution(list02)
solution(list03)
/*
const arr = {}
arr = X
arr['dd'] = O

{
    'dd': O 
}

obj = copy(arr);
{
    'dd': X
}

얕은복사 = 원시값 변경 O

깊은복사 = 원시값 변경 X
*/