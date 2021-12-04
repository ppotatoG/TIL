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

[자바스크립트 6. 클래스와 오브젝트 - 드림코딩 엘리](https://www.youtube.com/watch?v=_DLhUBWsRtw)