function quizCount(min, max){
    var num_count = 1;

    for(var i = min; i < max; i++){
        num_count = num_count.toString();

        if(num_count.length === 1) {
            num_count = "0" + num_count;
        }

        $(".step"+i+" .quiz_tit").prepend("문제 "+num_count);

        $(".step"+i+" .num span").text(num_count+"/"+18);
        num_count ++;
    }
}
quizCount(5, 23)