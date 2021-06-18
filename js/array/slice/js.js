let answer = ''
let list = [1, 2, 3, 3, 3, 3, 4, 4]

for(let i = 0; i < list.length; i++){
    if(list.indexOf(list[i]) == i) answer += list[i]
}
console.log(answer)

