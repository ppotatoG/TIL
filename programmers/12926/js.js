function solution(s, n){
    const arr = s.split("");

    let index;

    return s.split('').map((value) => {
        if(value === String.fromCharCode(32)) return String.fromCharCode(32)
        else if(value === value.toUpperCase()){
            index = value.charCodeAt() + n;
            return index > 90 ? value = String.fromCharCode(index - 26) :  value = String.fromCharCode(index);
        } else if(value === value.toLowerCase()) { // 소문자 
            index = value.charCodeAt() + n;
            return index > 122 ? value = String.fromCharCode(index - 26) :  value = String.fromCharCode(index);
        }
    }).join('');
}

console.log(solution('yz', 1)); // za
console.log(solution('z', 2)); // b
console.log(solution('Aa Z z', 2)); // Cc B b