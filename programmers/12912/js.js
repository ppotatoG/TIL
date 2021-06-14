function solution(a, b){

    let answer = 0
    let sortArr = []
    sortArr.push(a, b)

    if(a > b){
        sortArr.sort(function(a, b){
            if(a < b) return -1
            else if(a = b) return 0
            else return 1
        })
        for(let i = sortArr[0] ; i < sortArr[1]; i ++){
            answer = sortArr.reduce((a, b) => (a + b))
            answer += i
        }
    }
    else if(a < b){
        for(let i = sortArr[0] ; i < sortArr[1]; i ++){
            answer = sortArr.reduce((a, b) => (a + b))
            answer += i
        }
    }
    else if (a == b) answer = a

    return answer;

}
solution(3, 3)