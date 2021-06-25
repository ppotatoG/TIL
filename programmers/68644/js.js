function solution(arr) {
    const newArr = [];
    
    for (let i = 0; i < arr.length -1 ; i++) {
        for(let j = i + 1; j < arr.length ; j++){
            newArr.push(
                arr[i] + arr[j]
            )
        }
    }

    newArr.sort((a, b) => a == b ? 0 : a > b ? 1: -1 );

    const answer = newArr.filter((a, b) => newArr.indexOf(a) === b);
    // return answer;
    console.log(answer);
}

let s1 = [2,1,3,4,1]
let s2 = [5,0,2,7]

solution(s1)
solution(s2)