/*

// 1 - 1

const solution = (x, y) => {
    const num1 = x.toString().split('').sort((a, b) => a - b);
    const num2 = y.toString().split('').sort((a, b) => a - b);

    let arr = [];

    num1.forEach(val => {
        const tmp = num2.findIndex(v => v === val);
        
        if(tmp !== -1 ) {
            num2.splice(tmp, 1)
            arr.push(val);
        }

    })

    if(Number(num2.length) === Number(y.toString().length)) {
        return '-1';
    }

    const answer = arr.sort((a, b) => `${a}${b}` - `${b}${a}`).reverse().join('');

    return Number(answer) === 0 ? '0' : answer;
}

console.log(solution(3403, 13203)); // 3, 0, 3 / 330
console.log(solution(5525, 1255)); // 2, 5, 5 / 552
console.log(solution(100, 2345));
console.log(solution(100, 203045));
console.log(solution(100, 123450));
console.log(solution(12321, 42531));
console.log(solution(5525, 1255));

*/


// 1 - 2

// 시작일 : 구매 수량

/* 
{
    시작일 : 구매수량,
    시작일 : 구매수량,
    시작일 : 구매수량,
    시작일 : 구매수량,
    시작일 : 구매수량
}

*/
const solution = (want, number, discount) => {

    // [구매해야 하는 물건, 수량]
    let wantArr = want.map((val, idx) => [val, number[idx]]);

    // [[시작일, 구매수량], [시작일, 구매수량], ...]
    let answer = [];

    // 할인목록 배열
    for(let idx = 0; idx < discount.length; idx++) {

        // want배열 내 현재 아이템의 값을 갖고있는 인덱스
        const findIdx = wantArr.findIndex(v => v[0] === discount[idx]);

        // 갖고있으면 지금부터 10번 시작할거임
        if(findIdx !== -1) {

            // answer에 [시작일, 0] 추가
            answer.push([idx + 1, 0]);

            // while i 초기화
            let i = 0;
            
            const copyWantArr = [...wantArr];

            while(i < 10) {

                // 시작일 + i 값이 할인목록 배열에 있는지 확인
                const curFindIdx = copyWantArr.findIndex(v => v[0] === discount[idx + 1]);

                if(curFindIdx !== -1) {
                    answer[answer.length - 1][1] ++;
                    copyWantArr[curFindIdx][1] --;
                    
                    if(copyWantArr[curFindIdx][1] === 0) copyWantArr.splice(findIdx, 1);
                }

                i++;
            }

            if(answer[answer.length - 1][1] === 10) break;
        }
    };

    return !(answer[answer.length - 1]) ? 0 : answer[answer.length - 1][0]; 
}

console.log(
    solution(["banana", "apple", "rice", "pork", "pot"], 
    [3, 2, 2, 2, 1], 
    ["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"])
); // 3

console.log(
    solution(["apple"], 
    [10], 
    ["banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana"])
); // 0