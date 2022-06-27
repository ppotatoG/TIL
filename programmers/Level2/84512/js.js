const solution = (s) => {
    const collection = ['A', 'E', 'I', 'O', 'U'];
    const multiple = [781, 156, 31, 6, 1];

    return s.split('').reduce((acc, cur, idx) => {
        if(cur !== 'A') {
            const findIdx = collection.findIndex(val => val === cur);
            return acc + 1 + (multiple[idx] * findIdx);
        }
        else {
            return acc + 1;
        }
    }, 0);
}

// /*
console.log(solution('AAAAE')); // 6 => 5 + 1 => 길이 5 + 다섯번째 문자 변경 1
console.log(solution('AAAE')); // 10 => 4 + 6 => 길이 4 + 네번째 문자 변경 6
console.log(solution('I')); // 1563 // 길이 1 + 첫번째 문자 변경 781 * 2 (a, e, i)
// */
console.log(solution('EIO')); // 1189 
// 문자열 길이 3 +
// 첫번째 문자 변경 781 * 1 +
// 두번째 문자 변경 156 * 2 (312)+
// 세번째 문자 변경 31 * 3