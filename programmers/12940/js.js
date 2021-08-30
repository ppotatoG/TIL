function solution(n, m) {
    let g, l;

    l = n*m*g;

    for(let i  = 1; i < m +1; i++){
        if(n % i == 0 & m % i == 0) g = i; 
    }

    console.log(g, n*m*g)
}

console.log(solution(3, 12));
console.log(solution(2, 5));