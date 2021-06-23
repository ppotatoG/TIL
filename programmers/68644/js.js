function solution(arr) {
    let answer = [];

    console.log(arr)

    // for(let i = 0; i < arr.length; i++){
    //     console.log(arr[i], arr[i += 1])
    // }

    answer.push(
        arr[4] += arr[3],
        arr[4] += arr[2],
        arr[4] += arr[1],
        arr[4] += arr[0]
    )
    answer.push(
        arr[3] += arr[2],
        arr[3] += arr[1],
        arr[3] += arr[0]
    )
    answer.push(
        arr[2] += arr[1],
        arr[2] += arr[0]
    )
    answer.push(
        arr[1] += arr[0]
    )

    console.log(answer)

    answer.sort((a, b) => a == b ? 0 : a > b ? 1: -1 );

    console.log(answer)
}

let s1 = [2,1,3,4,1]

solution(s1)
