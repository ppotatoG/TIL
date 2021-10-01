function solution(s, n){
    let index;

    return s.split('').map((value) => {
        index = value.charCodeAt() + n;
        if(value === String.fromCharCode(32)) return value;
        else if(value === value.toUpperCase()) return index > 90 ? String.fromCharCode(index - 26) :  String.fromCharCode(index);
        else if(value === value.toLowerCase()) return index > 122 ? String.fromCharCode(index - 26) :  String.fromCharCode(index);
    }).join('');
}

console.log(solution('yz', 1)); // za
console.log(solution('z', 2)); // b
console.log(solution('Aa Z z', 2)); // Cc B b