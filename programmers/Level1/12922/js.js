function solution(num) {
    let subak = '수박';

    for(let i = 1; i < (num / 2) ; i++){
        subak += '수박';
    }
    
    return num % 2 == 0 ? subak : subak.slice(0, -1) ;
}
console.log(solution(3));
console.log(solution(10));