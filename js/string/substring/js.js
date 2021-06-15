let s = '만천하의 새 이는 가슴에 그러므로 들어 것이다.'

console.log(s.substring(0, 1)) // 만
console.log(s.substring(1, 0)) // 만

console.log(s.substring(14, 18)) // 그러므로
console.log(s.substring(18, 14)) // 그러므로

console.log(s.substring(14)) // 그러므로 들어 것이다.
console.log(s.substring(1)) // 만천하의 새 이는 가슴에 그러므로 들어 것이다.

console.log(s.substring(1, 1)) // blank