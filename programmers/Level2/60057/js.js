const solution = (record) => {    
    let answer = '';
    let tmpArr = [];

    for(let i = 0; i < record.length; i++) {
        if(record[i] === record[i + 1]) {
            tmpArr.push(record[i]);
        }

        else {
            if(tmpArr.length !== 0) {
                answer += `${tmpArr.length + 1}${tmpArr[0]}`;
                tmpArr = [];
            }

            else {
                answer += record[i];
            }
        }
    }

    return answer; // 2a2ba3c
}
// console.log(solution('aabbaccc')); // 7
console.log(solution('ababcdcdababcdcd'));// 9
console.log(solution('abcabcdede'));// 8
console.log(solution('abcabcabcabcdededededede'));// 14
console.log(solution('xababcdcdababcdcd'));// 17