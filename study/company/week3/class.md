# [class](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes)

## fields, methods

```js
class Person {
    constructor(name, age) {
        // fields(속성)
        this.name = name;
        this.age = age;
    }

    speak() {
        // methods(함수)
        console.log(`Hello, ${this.name}!`);
    }
};

const ellie = new Person('ellie', 20);

console.log(ellie.name) // ellie
console.log(ellie.age) // 20
ellie.speak(); // Hello, ellie!
```

## getter setter

[`get`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/get)  - 객체의 속성 접근 시 호출할 함수를 바인딩

[`set`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/set) - 객체의 속성에 할당을 시도할 때 호출할 함수를 바인딩

```js
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    speak() {
        console.log(`Hello, ${this.firstName}!`);
    }


    // firstName 가공하기
    get firstName() { 
        // firstName을 대문자로 변환
        return this._firstName.toUpperCase(); 
    } 
    
    set firstName(newName){ 
        // 대문자로 변환한 값 입력
        newName = _firstName;
    }

    // age 가공하기
    get age() {
        return this._age;
    }

    set age(value) {
        // value가 0보다 작으면 0으로 변환
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1);
user1.speak() // Hello, STEVE!
```

## [extends](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes/extends)

클래스를 다른 클래스의 자식으로 만들기 위해 class 선언 또는 class 식에 사용

```js
// Shape
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    }
}

// Shape의 자식 클래스인 Rectangle
class Rectangle extends Shape {}

// Shape의 자식 클래스인 Triangle
class Triangle extends Shape {

    draw() {
        // 부모 draw 사용
        super.draw();

        // 새로운 내용
        console.log('🔺');
    }
    getArea() {
        // 부모의 getArea 대신 다른 값
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'pink');
rectangle.draw(); // drawing pink color!
console.log(rectangle.getArea()); // 400

const triangle = new Triangle(20, 20, 'blue');
triangle.draw(); // drawing blue color!
console.log(triangle.getArea());
/*
🔺
200
*/
```


## [instanceof](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/instanceof)

생성자의 `prototype 속성`이 객체의 `프로토타입 체인 어딘가 존재`하는지 판별

```js
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true
```
---

## slide 구현하기

아래와 같은 코드로 작동하는 슬라이드가 있을 때,

1. 슬라이드를 선언하나로 쉽게 추가
2. class 사용
3. 프라이빗 멤버

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

### class 사용

```js
// 최상위 wrap
const wrap = document.querySelector('#wrap');

class CreatSlide {
    // slideData, slide끼리 구분지어줄 className
    constructor(data, className) {
        const frag = document.createDocumentFragment();

        // 생성될 앨리먼트 div, ul
        this.slideWrap = document.createElement('div');
        this.slide = document.createElement('ul');

        // 슬라이드 전환을 위한 curIdx
        this.curIdx = 0;

        // 슬라이드 내용으로 들어갈 slideData
        this.slideData = data;

        // BEM
        this.slideWrap.className = `slide_${className}`;
        this.slide.className = `slide_${className}__container`;
        
        this.slide.style.width = `${this.slideData.length * 100}px`;
    
        data.forEach((val) => {
            const li = document.createElement('li');
            li.className = `slide_${className}__item`;
            li.innerText = val;
        
            this.slide.appendChild(li);
        });

        this.slideWrap.appendChild(this.slide);

        // click event, bind(this)
        this.slide.addEventListener('click', this.triggerClick.bind(this));
    
        frag.appendChild(this.slideWrap);
        wrap.appendChild(frag);
    
        // return triggerClick
        return {
            triggerClick() {
                handleClick();
            }
        }
    }
};


// CreatSlide에서 반환받은 triggerClick
CreatSlide.prototype.triggerClick = function(e) {
    e && e.preventDefault();
    this.curIdx = (this.curIdx + 1) % this.slideData.length;
    this.slide.style.left = `${-100 * this.curIdx}px`;
}

const slide1 = new CreatSlide([1, 2, 3, 4, 5], 'num');
const slide2 = new CreatSlide(['A', 'B', 'C'], 'text');
```

### 프라이빗 멤버 - Symbol

```js
const wrap = document.querySelector('#wrap');

const CreatSlide = (() => {

    // CreatSlide 내에 필요한 값 심볼로 선언
    const slideWrap  = Symbol('slideWrap');
    const slide  = Symbol('slide');
    const slideData  = Symbol('slideData');
    const curIdx  = Symbol('curIdx');

    // CreatSlide에서 class 반환
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
```