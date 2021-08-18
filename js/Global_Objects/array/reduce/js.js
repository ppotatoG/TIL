let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let sum = arr1.reduce((a, b) => a + b)
console.log(sum)

let arr2 = [4, 3, 2, 5, 3, 1, 2, 4, 5, 3, 1]

let reducer = (acc, cur) => {
  if (!acc[cur]) acc[cur] = 1;
  else acc[cur] = acc[cur] + 1;

  return acc; 
};

let sorting = arr2.reduce(reducer, {});

console.log(sorting);