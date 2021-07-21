function fnc(a){
    let conut = 0
    let aOne = a === 1

    for(let i = 0; i < 501; i++){
        if(a === 1) break;

        if(a % 2 == 0 ) {
            console.log(a);
            
            a = a / 2

            console.log(a);

            conut ++;
            // console.log(conut)

            if (a === 1) break;
            
            if(a % 2 !== 0 )
            console.log(a);

            a = a * 3 + 1
            
            console.log(a);

            conut ++;
            // console.log(conut)
            if (a === 1) break;
        }
    }
}

let a = 6;
// let b = 5;

fnc(a)
// fnc(b)