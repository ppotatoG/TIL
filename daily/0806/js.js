// const chks = document.querySelectorAll('input[name="chk"]');
// let countChk = [];

// chks.forEach((chk) => {
//     chk.addEventListener('change', (e) =>{
//         if(e.target.checked === true) { 
//             countChk.push(chk);
//         }else if(e.target.checked === false) {
//             countChk.pop(chk)
//         }
        
//         console.log(countChk.length);

//         if(countChk.length > 3){
//             window.alert('3')
//             chk.checked = false;
//             return false;
//         }
//     })
// })
function solution(string){
    function solution(string){
        let array = string.toUpperCase().split('');
    
        let reducer = (acc, cur) => {
            if(!acc[cur]) acc[cur] = 1;
            else acc[cur] = acc[cur] + 1;
            
            return acc;
        }
    
        let answer = array.reduce(reducer, {})
    
        if(answer.P == answer.Y) return true;
        else return false;
    }
}

const a = "pPoooyY";
const b = "Pyy";

solution(a)
solution(b)