// 가변 변수는 let 키워드로 선언
// 읽거나 수정 가능
let num = 1;
num = num * 3;
let str = '문자';
str = '다른 문자';
let arr = [];
arr = [1, 2, 3];
let obj = {};
obj = { name: '새 객체' };

// 불변 변수는 const 키워드로 선언
// 읽기만 가능
// 값을 다시 할당할 수 없는 것이지 값을 변경하는 것은 가능
const num = 1;
num = 3; // 자료형 오류가 발생
const str = '문자';
str = '새 문자'; // 자료형 오류가 발생
const arr = [];
arr = [1, 2, 3]; // 자료형 오류가 발생
const obj = {};
obj = { name: '내 이름' }; // 자료형 오류가 발생

// 자바스크립트 내장 함수로 값 변경은 가능
const arr2 = [];
arr2.push(1); // arr2 = [1]
arr2.splice(0, 0, 0); // arr2 = [0, 1]
// 첫번째 인자는 인덱스
// 두번째 인자는 0일때는 추가, 1일때는 삭제를 의미
// 세번째 인자는 추가일 때 추가하는 값
arr2.pop() // arr2 = [1]
// 맨 앞에서부터 pop()
const obj2 = {};
obj2['name'] = '내이름'; // obj2 = { name: '내이름' }
Object.assign(obj2, { name: '새이름' }); // obj2 = { name: '새이름' }
delete obj2.name; // obj2 = {}

// 위와 같이 값을 내장 함수로 변경하는 것을 '무결성 제약 조건에 위베' 라고 함
// 불변 변수의 관리는 개발자의 역활
// 무결성을 유지하면서 값을 수정하기 위해서는 새로운 변수에 할당하는 방법 사용

const num1 = 1;
const num2 = num1 * 3;
const str1 = '문자';
const str2 = str1 + '추가';
const arr3 = [];
const arr4 = arr3.concat(1);
const arr5 = [...arr4, 2, 3];
const arr6 = arr5.slice(0, 1);
const [first, ...arr7] = arr5;
const obj3 = { name: '내이름', age: 20 };
const objValue = { name: '새이름', age: obj3.age };
const obj4 = { ...obj3, name: '새이름' };
const { name, ...obj5 } = obj4;

// 불변 변수를 사용하면 변수가 변하는 시점을 쉽게 파악
// 수정 전과 후의 변수값을 비교할 수 있어 가변 변수보다 더 유용