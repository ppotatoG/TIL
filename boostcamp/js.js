let test = []
let list = ['one', 'two', 'three', 'three', 'three', 'three', 'four', 'four']

// while( n < 10){ // 랜덤 난수 배열
//     n++
//     const testArr = Math.floor(Math.random()*10)
//     list[n] = testArr
// }

function solution(l){ // function solution()

    let listSet = [new Set(l)]

    let setArr = Array.from(listSet)

    console.log(setArr)

    // listset.forEach(element => {
    //     console.log(element)
    // });


    // for(let i = 0; i < list.length; i ++){
    //     if(i == list[i]) {
    //         console.log('true')
    //         test.push(list[i])

    //     }else if(l[i] !== list[i]) console.log('dddddddddsadad')

    //     // console.log(l[i], list[i])
    // }

}

solution(list)

// console.log(list)

// let listSet = [new Set(list)]

// console.log(listSet)