import ProductListPage from './src/ProductListPage.js';
import ProductDetailPage from './src/ProductDetailPage.js';
import CartPage from './src/CartPage.js';

export default function App ({$target}) {
    this.route = () => {
        const { pathname } = location;

        $target.innerHTML = '';


        if( pathname === '/web/' ) {
            new ProductListPage({ $target }).render()
        }

        else if( pathname === '/web/ProductDetailPage' ) {
            new ProductDetailPage({ $target }).render()
        }

        else if( pathname === '/web/CartPage' ) {
            new CartPage({ $target }).render()
        }

    }

    this.route();
}