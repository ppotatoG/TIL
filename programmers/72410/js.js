function solution(str) {
    let filterStrings = ['-', '_', '.', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    
    let answer = str.split('')
    .map((val) => val === val.toUpperCase() ? val = val.toLowerCase() : val)
    .filter(val => filterStrings.some(v => val.includes(v)))
    .join('')
    .replace(/\.{2,}/g, '.');

    if(answer.split('')[0] === '.') answer = answer.slice(1);
    if(answer.split('')[answer.length - 1] === '.') answer = answer.slice(0, -1);

    if(answer.length === 0) answer = 'a';

    if(answer.length > 15) {
        answer = answer.slice(0, 15)
        if(answer.split('')[answer.length - 1] === '.') answer = answer.slice(0, -1);
    }

    if(answer.length < 3) answer += answer.split('')[answer.length - 1].repeat(3 - answer.length)
    return answer;
}

console.log(solution('..........!@BaT#*..y.abcdefghijklm.')); // "bat.y.abcdefghi"
console.log(solution('z-+.^.')); // "z--"
console.log(solution('=.=')); // "aaa"
console.log(solution('123_.def')); // "123_.def"
console.log(solution('abcdefghijklmn.p')); // "abcdefghijklmn"
console.log(solution('.1.')); // "111"
console.log(solution('~!@#$%&*()=+[{]}:?,<>/')); // "aaa"
console.log(solution('')); // "aaa"
console.log(solution('.sfgsgsg.')); // "sfgsgsg"
console.log(solution('./././././abcd/././././.')); // "abcd"