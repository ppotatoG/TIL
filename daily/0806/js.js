const chks = document.querySelectorAll('input[name="chk"]');
let countChk = [];

chks.forEach((chk) => {
    chk.addEventListener('change', (e) =>{
        if(e.target.checked === true) { 
            countChk.push(chk);
        }else if(e.target.checked === false) {
            countChk.pop(chk)
        }
        
        console.log(countChk.length);

        if(countChk.length > 3){
            window.alert('3')
            chk.checked = false;
            return false;
        }
    })
})