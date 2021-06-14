function sum(a, b) {
    let answer = 0

    let num01 = a
    let num02 = b

    if (num01 == num02) answer = num01
    else {
        if(num01 > num02) {
            num01 = b
            num02 = a
        }
        for(let i = num01 ; i <= num02; i ++){
            answer += i
        }
    }
    
    // return answer;
    console.log(answer)
}
sum(1, 10)
sum(10, 1)
sum(3, 3)