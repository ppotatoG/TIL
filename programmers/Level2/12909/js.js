const solution = s => {
    let tmp = 0;

    while(s.length > 0) {
        tmp += s[0] === '(' ? 1 : -1;
        s = s.slice(1);

        if (tmp < 0) return false;
    }

    return !tmp;
}

console.log(solution("()()")) // true
console.log(solution("(())()")) // true
console.log(solution(")()(")) // false
console.log(solution("(()(")) // false