function solution(a, b){

    let answer = 0
    let Arr = []
    Arr.push(a, b)

    if (a == b) answer = a
    else {
        for(let i = Arr[0] ; i < Arr[1]; i ++){
            answer = Math.abs(Arr.reduce((a, b) => (a + b))) 
            answer += i
        }
    }
    // return answer;
    console.log(answer)

}
solution(3, 5)
solution(5, 3)
