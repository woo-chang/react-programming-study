var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
var combined = [array1[0], array1[1], array2[0], array2[1]];
var combined = array1.concat(array2); // 배열을 합치는 함수
var combined = [].concat(array1, array2);
var first = array1[0];
var second = array1[1];

console.log(array1);

var three = array1[2] || 'empty'; // || 연산자는 추출할 배열 요소가 없는 경우 기본값 지정

console.log(three);

function func() {
    var args = Array.prototype.slice.call(arguments); // 특수 변수 'argument'를 사용하여 함수 내 인자 항목을 배열로 변환
    console.log(args);
    var first = args[0];
    console.log(first);
    var others = args.slice(1, args.length);
    console.log(others);
}

func(1, 2, 3);
func(1, 2, 3, 4);

const es6Combined = [...array1, ...array2];
const [ one, two, third = 'empty', ...others ] = array1;
console.log(one);

function func2(...args) {
    var [start, ...others] = args;
}