객체처럼 돌려지는 `@each`문
```scss
$bg_cont: (
    'main_visual' : '#e9e8ff',
    'cont01' : '#fff',
    'cont02' : '#310986',
    'cont03' : '#fff',
    'cont04' : '#ededfc',
    'cont05' : '#401891',
);
@each $section, $color in $bg_cont {
    .#{$section}{background:#{$color} url('#{$img_url}bg_#{$section}.jpg') no-repeat center top;}
}
```

5*5 테이블에 is기법으로 background-position 다르게 적용하기
```scss
@for $i from 0 through 4{
    &:nth-child(5n + #{$i + 1}) a{
        @if $i == 4 {
            background-position-x: calc((-177px * #{$i}) - (13.3px *#{$i}));
        }
        @else{
            background-position-x: calc((-177px * #{$i}) - (13.5px *#{$i}));
        }
    }
    &:nth-child(n+#{$i*5 + 1}):nth-child(-n+ #{($i+1) * 5}) a{
        @if $i == 4 {
            background-position-y: calc((-97px - 14px) * #{$i});
        }
        @else if $i == 3 {
            background-position-y: calc((-97px - 13.8px) * #{$i});
        }
        @else{
            background-position-y: calc((-97px - 13.4px) * #{$i});
        }
    }
}
```