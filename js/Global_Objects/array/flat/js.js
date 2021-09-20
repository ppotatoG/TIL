const arr1 = [1, 2, [3, 4]];
console.log(arr1.flat());

const arr2 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arr2.flat(2));
console.log(arr2.flat(Infinity));

const arr3 = [1, , 4, , 5];
console.log(arr3.flat());

const arr = [1, 2, 3];
console.log(arr.map((el) => [el, el]).flat());