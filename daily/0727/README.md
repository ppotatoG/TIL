# 210727

### addEventListener

이걸 줄일 수 있는 방법.. 있지 않을까.....!
```js
function one(){
    console.log('1')
}
function two(){
    console.log('2')
}

if(window.innerWidth < 1024){
    window.addEventListener('load', one())
    window.addEventListener('resize', one())

    window.addEventListener('load', two())
    window.addEventListener('resize', two())
}
```