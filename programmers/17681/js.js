function solution(n, arr1, arr2) {
    arr1 = arr1.map((val) => {
        let binary = val.toString(2);
        return binary.length !== n ? ('0').repeat(n - binary.length) + binary  : binary;
    });

    arr1 = arr1.map((val) => val.split('').map((val2) => {
            return val2 === '1' ? val2 = '#' : val2 = ' ';
        }
    ));

    return arr1
}
console.log(solution(
    5,
    [9, 20, 28, 18, 11],
    [30, 1, 21, 17, 28]
)); 

// ["#####","# # #", "### #", "# ##", "#####"]
