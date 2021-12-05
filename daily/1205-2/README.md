# class

Javascript ES6+ 제대로 알아보기 - 중급

## slide 구현하기

아래와 같은 코드로 작동하는 슬라이드가 있을 때,

1. 슬라이드를 선언하나로 쉽게 추가
2. 외부에서 작동 가능한(prev, next 버튼)
3. class 사용
4. 프라이빗 멤버?

위와 같은 내용으로 변경

```js
// 최상위 div
document.body.innerHTML = '<div></div>';

// 만들어준 최상위 div를 변수에 담아줌
const div = document.querySelectorAll('div')[0];

// 돔에 그릴 Fragment
// 라이브 돔트리 외부에 경량화된 문서 돔 만들기, 라이브 돔트리처럼 작동하되, 메모리상에서만 존재하는 빈 문서 템플릿
const frag = document.createDocumentFragment();

// slide를 감싸는 div
const slide = document.createElement('div');
slide.className = 'slide';

// item을 갖고 움직일 ul
const container = document.createElement('ul');
container.className = 'slide__container';

// slide로 생성 될 data
const slideData = [1, 2, 3, 4, 5];

// slide move에 필요한 index
let curIdx = 0;

// 슬라이드의 전체 너비
container.style.width = `${slideData.length * 100}px`;

// data로 중복문
slideData.forEach((val) => {

    // slide item이 될 li
    const li = document.createElement('li');
    li.className = 'slide_item';
    li.innerText = val;

    // slide__item을 ul에 담아줌
    container.appendChild(li);
});


// slide를 감싸는 div안에 ul 넣어주기
slide.appendChild(container);

// div click마다 move
slide.addEventListener('click', e => {
    // e의 고유 동작을 중단, ex)<a href="#;">
    e.preventDefault();

    // 0부터 시작해 ++1이 되며, 나머지 연산자 사용으로 curIdx은 slideData.length보다 작음
    curIdx = (curIdx + 1) % slideData.length;

    // ul이 움직이며 슬라이드가 전환
    container.style.left = `${-100 * curIdx}px`;
})

// frag에 slide 추가
frag.appendChild(slide);

// 최상위 div에 frag추가
div.appendChild(frag);
```
### 슬라이드를 선언하나로 쉽게 추가

```js
// 최상위 wrap
const wrap = document.querySelector('#wrap');
// frag
const frag = document.createDocumentFragment();

// creatSlide 함수 시작, className으로 slide 구분
const creatSlide = (data, className) => {
    const slideWidth = 100;

    // slideWarp으로 구분
    const slideWrap = document.createElement('div');
    slideWrap.className = `slide_${className}`;
    
    // slideWrap으로 구분
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

    slide.addEventListener('click', e => {
        e.preventDefault();
        curIdx = (curIdx + 1) % data.length;
        slide.style.left = `${-slideWidth * curIdx}px`;
    });

    frag.appendChild(slideWrap);
    wrap.appendChild(frag);
};

creatSlide([1, 2, 3, 4, 5], 'num');
creatSlide(['A', 'B', 'C'], 'text');
```

### 외부에서 작동 가능한(prev, next 버튼)

```js
const wrap = document.querySelector('#wrap');
const frag = document.createDocumentFragment();

const creatSlide = (data, className, btn) => {
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

    // 함수 moveSlide 생성
    const moveSlide = (idx) => {
        slide.style.left = `-${(idx % data.length) * slideWidth}px`;
    }

    // 기존 내용 대신 moveSlide로 변경
    slide.addEventListener('click', e => {
        e.preventDefault();
        curIdx ++;
        moveSlide(curIdx);
    });

    // function creatSlide의 인자 중 btn값이 있을 때
    if(btn) {
        const prev = document.createElement('button');
        prev.className = `slide_${className}__prev`;
        prev.innerText = prev.className;
        wrap.appendChild(prev);

        prev.addEventListener('click', e => {
            e.preventDefault();

            // 이전, --
            curIdx --;
            moveSlide(curIdx);
        });
    
        const next = document.createElement('button');
        next.className = `slide_${className}__next`;
        next.innerText = next.className;
        wrap.appendChild(next);

        next.addEventListener('click', e => {
            e.preventDefault();

            // 다음 ++
            curIdx ++;
            moveSlide(curIdx);
        });
    }

    frag.appendChild(slideWrap);
    wrap.appendChild(frag);
};
```