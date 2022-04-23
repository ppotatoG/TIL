# 도넛차트

```html
<div class="graph" data-percent="0">
    <div></div>
    <p></p>
</div>
```

```css
.graph{width:200px;height:200px;margin:20px auto;border-radius:50%;background:lightpink;position:relative;overflow:hidden;}
.graph >div{position:absolute;top:0;left:0;width:100%;height:100%;}
.graph >p{position:absolute;top:10px;left:10px;width:calc(100% - 20px);height:calc(100% - 20px);background:#fff;border-radius:50%;color:#444;font-size:50px;font-weight:bold;line-height:180px;text-align:center;}
```

```js
(() => {
    const graph = document.querySelectorAll('.graph');
    if(graph) {
        graph.forEach(el => {
            const percent = el.dataset.percent;
            console.dir(el.children[0])
            el.children[0].style.background = `conic-gradient(transparent 0 ${percent}%, #eee ${percent}% 100%)`;
            el.children[1].innerText = `${percent}`;
        });
    }
})();
```