function solution(arr) {
    let answer = [];

    answer.push(
        arr[4] + arr[3],
        arr[4] + arr[2],
        arr[4] + arr[1],
        arr[4] + arr[0]
    )
    answer.push(
        arr[3] + arr[2],
        arr[3] + arr[1],
        arr[3] + arr[0]
    )
    answer.push(
        arr[2] + arr[1],
        arr[2] + arr[0]
    )
    answer.push(
        arr[1] + arr[0]
    )

    for(let i = arr.length -1 ; i > -1; i--){
        console.log(i+'번째')
        // answer.push(
        //     arr[i] + arr[3],
        //     arr[i] + arr[2],
        //     arr[i] + arr[1],
        //     arr[i] + arr[0]
        // )
    }

    answer.sort((a, b) => a == b ? 0 : a > b ? 1: -1 );
    
    console.log(answer)

    const test = answer.filter((a, b) => {
        return answer.indexOf(a) === b;
    });

    console.log(test)
}

let s1 = [2,1,3,4,1]

solution(s1)
