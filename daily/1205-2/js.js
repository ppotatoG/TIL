const wrap = document.querySelector('#wrap');
const frag = document.createDocumentFragment();

class CreatSlide{
    constructor(data, className, btn) {
        this.data = data;
        this.className = className;

        const slideWidth = 100;
        const slideWrap = document.createElement('div');
        slideWrap.className = `slide_${className}`;
        
        const slide = document.createElement('ul');
        slide.className = `slide_${className}__container`;
        
        let curIdx = 0;
        
        slide.style.width = `${data.length * slideWidth}px`;
        
        data.forEach((val) => {
            const li = document.createElement('li');
            li.className = `slide_${className}__item`;
            li.innerText = val;
            
            slide.appendChild(li);
        });
    
        slideWrap.appendChild(slide);
    
        const moveSlide = (idx) => {
            slide.style.left = `-${(idx % data.length) * slideWidth}px`;
        }
    
        slide.addEventListener('click', e => {
            e.preventDefault();
            curIdx ++;
            moveSlide(curIdx);
        });
    
        if(btn) {
            const prev = document.createElement('button');
            prev.className = `slide_${className}__prev`;
            prev.innerText = prev.className;
            wrap.appendChild(prev);
    
            prev.addEventListener('click', e => {
                e.preventDefault();
                curIdx --;
                moveSlide(curIdx);
            });
        
            const next = document.createElement('button');
            next.className = `slide_${className}__next`;
            next.innerText = next.className;
            wrap.appendChild(next);
    
            next.addEventListener('click', e => {
                e.preventDefault();
                curIdx ++;
                moveSlide(curIdx);
            });
        }
    
        frag.appendChild(slideWrap);
        wrap.appendChild(frag);
    }
};


const slide_num = new CreatSlide([1, 2, 3, 4, 5], 'num');
const slide_text = new CreatSlide(['A', 'B', 'C'], 'text', true);