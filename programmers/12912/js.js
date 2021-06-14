function sum(a, b) {
    let answer = 0

    if (a == b) answer = a
    else {
        if(a > b) for(let i = b ; i <= a; i ++) answer += i 
        for(let i = a ; i <= b; i ++) answer += i
    }
    
    console.log(answer)
}
sum(1, 10)
sum(10, 1)
sum(3, 3)