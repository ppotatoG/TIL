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
        const products = await request('/products');
        this.setState(products);
    }

    fetchProducts();

    const productList = new ProductList({
        $target: $page,
        initialState: this.state
    })
}