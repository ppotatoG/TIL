function solution(a, b){

    let answer = 0
    let Arr = []
    // Arr.push(a, b)

    for(let i = a ; i <= b; i ++){
        Arr.push(i)
        console.log(Arr)
        answer = Math.abs(Arr.reduce((a, b) => (a + b)))
    }
    // return answer;
    console.log(answer)

}
solution(5, 3)