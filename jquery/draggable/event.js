$(function() {
    $('.mySwiper').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
    });

    $('.drag_btn').draggable({
        stop : function( event, ui ) {
            var parentWidth = 800;
            var thisWidth = 200;
            var maxLeft = parentWidth - thisWidth;

            if(ui.position.left < 100) {    
                event.target.style.left = 0;
                $('.mySwiper').slick('slickGoTo', 0);
            }
            else if(100 < ui.position.left && ui.position.left < 300) {
                event.target.style.left = 200 + 'px';
                $('.mySwiper').slick('slickGoTo', 1);
            }
            else if(300 < ui.position.left && ui.position.left < 500) {
                event.target.style.left = 400 + 'px';                               
                $('.mySwiper').slick('slickGoTo', 2);
            }
            else if(500 < ui.position.left && ui.position.left < maxLeft) {
                event.target.style.left = maxLeft + 'px';
                $('.mySwiper').slick('slickGoTo', 3);
            }
        }
    });
});