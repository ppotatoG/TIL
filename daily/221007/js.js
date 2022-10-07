$(function() {
    var lazyEl = document.querySelectorAll('.hack_lazy');
    var point = window.innerHeight;

    function hack_lazy() {
        if ($('.hack_lazy').length === 0 ) return false;

        lazyEl.forEach(function(lazyItem) {
            var rect = lazyItem.getBoundingClientRect();

            if( (rect.top - point) <= point - point * .1) {
                AOS.refresh();

                if ( !(lazyItem.src.toString().includes('/blank.')) ) {
                    lazyItem.classList.remove('hack_lazy');
                    return false;
                }

                lazyItem.src = lazyItem.dataset.original;
            }
        });
    }

    $(window).on('scroll', function() {
        hack_lazy();
    })
});