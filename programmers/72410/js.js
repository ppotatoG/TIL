function solution(str) {
    let filterStrings = ['-', '_', '.', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'y', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    
    let answer = str.split('')
    .map((val) => val === val.toUpperCase() ? val = val.toLowerCase() : val) // 대문자에서 소문자
    .filter(val => filterStrings.some(v => val.includes(v))) // filterStrings
    .join('') // 합침
    .replace(/\.{2,}/g, '.'); // 연속된 마침표

    if(answer.split('')[0] === '.') answer = answer.slice(1); // 마침표 처음
    if(answer.split('')[answer.length - 1] === '.') answer = answer.slice(0, -1); // 마침표 끝

    if(str.length === 0) answer = 'a'; // 빈 문자열

    if(answer.length > 16) {
        answer = answer.slice(0, 15) // 16 이상
        if(answer.split('')[answer.length - 1] === '.') answer = answer.slice(0, -1); // 마침표 끝
    }

    if(answer.length < 3) answer = answer.split('')[answer.length - 1].repeat(3)

    return answer;
}
console.log(solution('..........!@BaT#*..y.abcdefghijklm.')); // "bat.y.abcdefghi"
console.log(solution('z-+.^.')); // "z--"
console.log(solution('=.=')); // "aaa"
console.log(solution('123_.def')); // "123_.def"
console.log(solution('abcdefghijklmn.p')); // "abcdefghijklmn"