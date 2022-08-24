export default function ProductDetailPage ({$target}) {
    console.log($target)

    const $page = document.createElement('div');
    $page.className = 'ProductDetailPage';
    $page.innerHTML = '<h1>상품정보</h1>';

    this.render = () => {
        $target.appendChild($page);
    }
}