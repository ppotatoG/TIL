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
