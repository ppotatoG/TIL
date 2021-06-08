arr = [1, 2, 3, 3, 3, 3, 3, 4, 2, 3, 5, 3, 4, 4, 4, 5, 6]

function solution(){

    let arr1 = arr.filter(function(n){
        return n == 3
    })

    let obj = {}
    let array = [1, 2, 3, 4, 5, 6]

    for(num of array){

        obj['array'+num] = arr1

        console.log(obj)

        /*
        obj['array'+num] = 'dd'
        
        obj = {
            array1 : "dd",
            array2 : "dd",
            array3 : "dd",
            array4 : "dd",
            array5 : "dd",
            array6 : "dd"
        }
        
        obj['array'+num] = arr1

        obj = {
            array1 : [3, 3, 3, 3, 3, 3, 3, 3],
            array2 : [3, 3, 3, 3, 3, 3, 3, 3],
            array3 : [3, 3, 3, 3, 3, 3, 3, 3],
            array4 : [3, 3, 3, 3, 3, 3, 3, 3],
            array5 : [3, 3, 3, 3, 3, 3, 3, 3],
            array6 : [3, 3, 3, 3, 3, 3, 3, 3]
        }

        */
    }

}
solution()

// const obj = {}
// const array = [1, 3, 5, 7, 9]

// for(num of array){

//     obj['array'+num] = 'hello'

//     console.log(obj)
// }