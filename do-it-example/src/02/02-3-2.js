// 기존에는 객체의 키나 값을 추출할 때 객체 내장 함수를 사용
var objectOne = { one: 1, two: 2, other: 0 };
var objectTwo = { three: 3, four: 4, other: -1 };
var combined = {
    one: objectOne.one,
    two: objectOne.two,
    three: objectTwo.three,
    four: objectTwo.four,
};
var combined = Object.assign({}, objectOne, objectTwo); // other: -1, 앞에 있는 객체 순서대로 덮어쓰는 동작
var combined = Object.assign({}, objectTwo, objectOne); // other: 0
var others = Object.assign({}, combined);
delete others.other;
console.log(others);

// ES6의 전개 연산자
var es6Combined = {
    ...objectOne,
    ...objectTwo
}
console.log(es6Combined);

var { other, ...others } = es6Combined; // 추출하려는 키 이름을 맞추고 나머지는 전개 연산자로 선언된 변수에 할당
console.log(other)
console.log(others)