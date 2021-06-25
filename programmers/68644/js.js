function solution(arr) {
    const answer = [] ;

    for (let i = 0; i < arr.length -1 ; i++) {
        for(let j = i + 1; j < arr.length ; j++){
            if(arr.indexOf(arr[i]) == i) answer.push(arr[i] + arr[j])
        }
    }

    answer.sort((a, b) => a - b)

    console.log(answer);
}

let s1 = [2,1,3,4,1]
let s2 = [5,0,2,7]

solution(s1)
solution(s2)