# echart안그려짐

## css속성별 유무

|css properties |O / X|
|:--|:--:|
|opacity:0|O|
|visibility:hidden|O|
|z-index:-1|O|
|display:none|X|
|height:0|X|

## 초기화 시 앨리먼트 크기 설정

```js
var myChart = echarts.init(document.querySelector('.chartDom2'), null, {
    width: 300,
    height: 400
});

option && myChart.setOption(option);
```
[Chart Container and Size](https://apache.github.io/echarts-handbook/en/concepts/chart-size/)