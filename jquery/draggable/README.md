# [Draggable Widget](https://api.jqueryui.com/draggable/)

1. `drag_btn`에 따라서 `swiper index`가 바뀜
2. `drag_btn`는 X : 0 ~ 750 / Y : 0에서만 움직여야 함
3. `drag_btn`의 x값에 따라 `drag_bar`에 적절한 곳에 위치해야 함

```html
<div class="swiper mySwiper">
    <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="slide_01.jpg" alt="" /></div>
        <div class="swiper-slide"><img src="slide_02.jpg" alt="" /></div>
        <div class="swiper-slide"><img src="slide_03.jpg" alt="" /></div>
        <div class="swiper-slide"><img src="slide_04.jpg" alt="" /></div>
    </div>
</div>

<div class="drag_bar">
    <span class="drag_btn" draggable="true"></span>
</div>
```

## draggable 선언

드래그 할 앨리먼트에 `draggable`

```js
$('.drag_btn').draggable();
```

```js
$('.drag_btn').draggable({
    // code
    start : function( event, ui ) {
        // code
    },
    stop : function( event, ui ) {
        // code
    }
});
```

## y축 이동 제한
```css
.drag_bar .drag_btn{inset-block-start:0 !important;inset-block-end:0 !important;}
.drag_bar .drag_btn{top:0 !important;bottom:0 !important;}
```

## left값에 따라 drag_btn 위치 변경

```js
 $('.drag_btn').draggable({
    stop : function( event, ui ) {
        var parentWidth = 800;
        var thisWidth = 200;
        var maxLeft = parentWidth - thisWidth;

        if(ui.position.left < 100) {
            event.target.style.left = 0;
        }
        else if(100 < ui.position.left && ui.position.left < 300) {
            event.target.style.left = 200 + 'px';
        }
        else if(300 < ui.position.left && ui.position.left < 500) {
            event.target.style.left = 400 + 'px';
        }
        else if(500 < ui.position.left && ui.position.left < maxLeft) {
            event.target.style.left = maxLeft + 'px';
        }
    }
});
```

## left값에 따라 슬라이드 인덱스 변경

```js
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
```

~~슬라이드 구려져서 못씀~~