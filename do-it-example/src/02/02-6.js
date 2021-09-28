// 클래스

function Shape (x, y) {
    this.name = 'Shape';
    this.move(x, y);
}
// static 함수를 선언하는 예제
Shape.create = function(x, y) { return new Shape(x, y); };
// 인스턴스 함수를 선언하는 예제
// prototype : this로 참조
Shape.prototype.move = function(x, y) {
    this.x = x;
    this.y = y;
}
Shape.prototype.area = function() {
    return 0;
}

// 인스턴스 함수를 선언하는 에제 2
Shape.prototype = {
    move: function(x, y) {
        this.x = x;
        this.y = y;
    },
    area: function() {
        return 0;
    }
}
// this 객체가 prototype 객체에 선언된 변수와 함수를 함께 참조
var s = new Shape(0, 0);
console.log(s.area());

// 클래스의 상속!
function Circle(x, y, radius) {
    Shape.call(this, x, y);
    this.name = 'Circle';
    this.radius = radius;
}
Object.assign(Circle.prototype, Shape.prototype, {
    area: function() {
        return this.radius * this.radius;
    }
})
var c = new Circle(0, 0, 10);
console.log(c.area());
// 내장 함수 call()을 통해 Shape 생성자를 호출하여 초깃값 상속, 자바의 super() 함수

// ES6 클래스 사용 방법
class Shape {
    static craete(x, y) { return new Shape(x, y); }
    name = 'Shape';
    constructor (x, y) {
        this.move(x, y);
        console.log("H")
    }
    move(x, y) {
        this.x = x;
        this.y = y;
    }
    area() {
        return 0;
    }
}
var s2 = new Shape(0, 0);
console.log(s2.area());

class Circle extends Shape {
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
    }
    area() {
        if (this.radius === 0) return super.area();
        return this.radius * this.radius;
    }
}

var c2 = new Circle(0, 0, 10);
console.log(c2.area())

// 다중 상속이나 인터페이스는 지원하지 않는다!