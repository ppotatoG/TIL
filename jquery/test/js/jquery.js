const menuBtns = document.querySelectorAll('.menu li li');

for(let i = 0; i < menuBtns.length; i++){
    menuBtns[i].addEventListener('click', function(){
        js_show('quiz0' + (Number(i) + 1));
    })
}
function chkAnswer(e){
    var cont = e.closest('.content');
    var contIdx = cont.attr('class').split(' ')[1].slice(-1);
    
    js_show('.answer0' + contIdx);
}

$('.next').on('click', function(){
    var cont = $(this).closest('.content');
    var contIdx = cont.attr('class').split(' ')[1].slice(-1);

    if(contIdx === '08') return false;
    else js_show('quiz0' + (Number(contIdx) + 1));

});

$('.prev').on('click', function(){
    var cont = $(this).closest('.content');
    var contIdx = cont.attr('class').split(' ')[1].slice(-1);

    if(contIdx === '01') return false;
    else js_show('quiz0' + (Number(contIdx) - 1));
});