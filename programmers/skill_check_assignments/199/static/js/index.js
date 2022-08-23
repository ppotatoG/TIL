console.log("JS is loaded!");

const router = async () => {
    const routes = [
        {
            path: '/',
            view: () => {
                console.log('/')
            }
        },
        {
            path: '/detail',
            view: () => {
                console.log('/detail')
            }
        },
        {
            path: '/cart',
            view: () => {
                console.log('/cart')
            }
        }
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    console.log(potentialMatches.find(potentialMatch => potentialMatch.isMatch));
};

document.addEventListener("DOMContentLoaded", () => {
    router();
    console.log('DOMContentLoaded')
});