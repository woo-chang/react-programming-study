// 화살표 함수

// 기존 자바스크립트 함수 사용 방법
function add(first, second) {
    return first + second;
}

var add = function(first, second) {
    return first + second;
};

// 첫번째 방식은 함수이름이 존재, 두번째 방식은 익명 함수

// ES6의 화살표 함수는 익명 함수를 선언하여 변수에 대입하는 방법과 유사
var add6 = (first, second) => {
    return first + second;
}
var add6_2 = (first, second) => first + second;
// 반환값이 객체인 경우 중괄호로 감싸 간결하게 표현
var addAndMultiple = (first, second) => ({add : first + second, multiply: first * second});
console.log(addAndMultiple(1, 2));

// 함수 표현식을 반환
function addNumber(num) {
    return function(value) {
        return num + value;
    }
}

var addNumber = num => value => num + value;

console.log(addNumber(1)(2));

class MyClass {
    value = 10;
    constructor() {
        var addThis2 = function(first, second) {
            return this.value + first + second;
        }.bind(this);
        var addThis3 = (first, second) => this.value + first + second;
        this.name = "class";
    }
}

var c = new MyClass();
console.log(c.name);