// 객체 확장 표현식과 구조 분해 할당

// 기존 자바스크립트에서는 객체와 객체 선언을 위해 키와 값을 각각 할당
var obj = { x: 'x', y: 'y'};
var combined = {};
combined['one' + 'two'] = 'some value';
var obj2 = {
    x: 'x',
    methodA: function() { console.log('method A'); },
    methodB: function() { return 0; }
};
console.log(combined);

// ES6 객체 확장 표현식
var x1 = 'x'
var y2 = 'y'
var objES6 = { x1, y2 };
var combinedES6 = {
    ['one' + 'two']: 'some value'
}
var obj2ES6 = {
    x1,
    methodA() { console.log("method A"); },
    methodB() { return 0; }
}
console.log(objES6);
console.log(obj2ES6);

// 기존 자바스크립트 구조 분해 사용 방법
var list = [0, 1];
var item1 = list[0];
var item2 = list[1];
var item3 = list[2] || 2; // 값이 존재하지 않으면 2로 할당
console.log(item3);

// ES6의 구조 분해와 구조 할당 사용 방법
var listES6 = [0, 1];
var [
    item1,
    item2,
    item3 = 2
] = listES6;
[item1, item2] = [item2, item1];
console.log("item1: " + item1)
var obj = {
    key1: 'one',
    key2: 'two'
}
var {
    key1: newKey1, // 콜론 뒤에 변수명으로 할당, 기존 변수명은 접근 X
    key2,
    key3 = 'default',
} = obj;
console.log(key3, newKey1, key2);