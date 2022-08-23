import List from './views/List.js';
import NotFound from './views/NotFound.js';

const router = async () => {
    const routes = [
        {
            path: '/web',
            view: List
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

    console.log(potentialMatches)
    console.log(match)
    console.log(location.pathname)
};

document.addEventListener("DOMContentLoaded", () => {
    router();
    console.log('DOMContentLoaded')
});