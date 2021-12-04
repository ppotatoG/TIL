class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log(`Hello, ${this.name}!`);
    }
};

const ellie = new Person('ellie', 20);

console.log(ellie.name)
console.log(ellie.age)
ellie.speak();

class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    speak() {
        console.log(`Hello, ${this.firstName}!`);
    }

    get firstName() { 
        return this._firstName.toUpperCase(); 
    } 
    
    set firstName(newName){ 
        if(newName) this._firstName = newName;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1);
user1.speak()

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

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw();
        console.log('🔺');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'pink');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'blue');
triangle.draw();
console.log(triangle.getArea());


console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);