# 부스트캠프 자가진단 문제풀이

[자가진단 네이버 블로그](https://blog.naver.com/boostcamp_official/221978031932)

- 1 자연수가 들어있는 배열 arr
- 2 배열 arr 숫자들 중 앞에 있는 숫자들부터 뒤에 중복되어 나타나는 숫자들 중복 횟수 return
- 3 중복되는 숫자가 없으면 배열에 -1 을 채워 return

<br>

- 배열 arr의 길이는 1 이상 100 이하의 자연수
- 배열 arr의 원소는 1 이상 100 이하의 자연수

```
arr = [1, 2, 3, 3, 3, 3, 3, 4, 2, 3, 5, 3, 4, 4, 4, 5, 6]
function solution(){

    let arr1 = arr.filter(function(n){
        return n == 3
    })

    console.log(arr1) 
    // (7) [3, 3, 3, 3, 3, 3, 3]

}
solution()
```