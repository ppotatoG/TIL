import Home from './views/Home.js';
import Detail from './views/Detail.js';
import Cart from './views/Cart.js';
import NotFound from './views/NotFound.js';

const router = async () => {
    const routes = [
        {
            path: '/',
            view: Home
        },
        {
            path: '/detail',
            view: Detail
        },
        {
            path: '/cart',
            view: Cart
        }
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

    if(!match) {
        match = {
            route: location.pathname,
            isMatch: true
        };
        const page = new NotFound();
        document.querySelector('main.app').innerHTML = await page.getHtml();
    }
    else {
        const page = new match.route.view;
        document.querySelector('main.app').innerHTML = await page.getHtml();
    }
};

document.addEventListener("DOMContentLoaded", () => {
    router();
    console.log('DOMContentLoaded')
});