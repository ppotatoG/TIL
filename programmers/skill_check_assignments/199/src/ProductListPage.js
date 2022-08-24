import ProductList from './ProductList.js';
import { request } from './api.js';

export default function ProductListPage({ $target }) {
    const $page = document.createElement('div');

    $page.className = 'productListPage';
    $page.innerHTML = '<h1>상품목록</h1>';

    this.state = '';

    this.render = () => {
        $target.appendChild($page);
    }

    this.setState = (nextState) => {
        this.state = nextState;
    }

    const fetchProducts = async () => {
        console.log('21')
        const products = await request('/products');

        console.log('24' + products)
        console.log('24' + this.state)

        this.setState = '{dddddddddd}';

        console.log('29' + products)
        console.log('29' + this.state)
    }

    fetchProducts();

    const productList = new ProductList({
        $target: $page,
        iniitalState: this.state
    })
}