# Image()

>## [Image()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image)

> var htmlImageElement = new Image(width, height);

```js
(() => {
    const imgEl = new Image(600, 300)
    imgEl.src = 'http://via.placeholder.com/600x300';
    document.body.appendChild(imgEl)
})()
```