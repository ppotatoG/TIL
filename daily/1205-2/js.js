const wrap = document.querySelector('#wrap');

const CreatSlide = (() => {
    const slideWrap  = Symbol('slideWrap');
    const slide  = Symbol('slide');
    const slideData  = Symbol('slideData');
    const curIdx  = Symbol('curIdx');

    return class{
        constructor(data, className) {
            const frag = document.createDocumentFragment();
    
            this[slideWrap] = document.createElement('div');
            this[slide] = document.createElement('ul');
            this[curIdx] = 0;
            this[slideData] = data;
    
            this[slideWrap].className = `slide_${className}`;
            this[slide].className = `slide_${className}__container`;
            this[slide].style.width = `${this[slideData].length * 100}px`;
        
            data.forEach((val) => {
                const li = document.createElement('li');
                li.className = `slide_${className}__item`;
                li.innerText = val;
            
                this[slide].appendChild(li);
            });
    
            this[slideWrap].appendChild(this[slide]);
            
            this[slide].addEventListener('click', this.triggerClick.bind(this));
        
            frag.appendChild(this[slideWrap]);
            wrap.appendChild(frag);
        
        }
        triggerClick(e) {
            e && e.preventDefault();

            this[curIdx] = (this[curIdx] + 1) % this[slideData].length;
            this[slide].style.left = `${-100 * this[curIdx]}px`;
        }
    }
})()

const slide1 = new CreatSlide([1, 2, 3, 4, 5], 'num');
const slide2 = new CreatSlide(['A', 'B', 'C'], 'text');