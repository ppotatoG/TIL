const scrollEl = document.querySelectorAll('[data-quick-start]');
let scrollValues = [];

scrollEl.forEach(item => {
    const startEl = document.querySelector(`.${item.dataset.quickStart}`).offsetTop;
    const endEl =
        document.querySelector(`.${item.dataset.quickEnd}`).offsetTop
        + document.querySelector(`.${item.dataset.quickEnd}`).scrollHeight;

    scrollValues.push([startEl, endEl]);
})

console.log(scrollValues);

const quickEl = document.querySelectorAll('.quick__item');

const scrollFnc = () => {
    scrollValues.forEach((scrollPoint, idx) => {
        if(window.scrollY >= scrollPoint[0] && window.scrollY <= scrollPoint[1]) {
            quickEl[idx].classList.add('on');
        }
        else {
            quickEl[idx].classList.remove('on');
        }
    });
}

(() => scrollFnc())();
window.addEventListener('scroll', scrollFnc);