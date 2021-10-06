// 배열 함수

// query String을 분리하여 객체에 담아 반환하는 함수
function parse(qs) {
    var queryString = qs.substr(1);
    console.log(queryString);
    var chunks = queryString.split('&');
    console.log(chunks);
    var result = {};
    for(var i = 0; i < chunks.length; i++) {
        var parts = chunks[i].split('=');
        var key = parts[0];
        // var value = parts[1];
        var value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
        result[key] = value;
    }
    console.log(result);
}

function parse1(qs) {
    const queryString = qs.substr(1);
    const chunks = queryString.split('&');
    let result = {};
    chunks.forEach((chunk) => {
        const parts = chunk.split('=');
        const key = parts[0];
        const value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1])
        result[key] = value;
    })
    console.log(result)
}

function parse2(qs) {
    const queryString = qs.substr(1);
    const chunks = queryString.split('&');
    let result = {};
    chunks.forEach((chunk) => {
        const [key, value] = chunk.split('=')
        result[key] = value;
    })
    console.log(result)
}

parse('/banana=10&apple=20&orange=30')
parse1('/banana=10&apple=20&orange=30')
parse2('/banana=10&apple=20&orange=30')
parse3('/banana=10&apple=20&orange=30')
parse4('/banana=10&apple=20&orange=30')

// 앞의 예제는 가변 변수 let 사용
// 불변 변수 사용을 위해서는 map() 사용
// map() 함수는 결과를 바로 반화하므로 가변 변수 사용하지 않아도 됨
function parse3(qs) {
    const queryString = qs.substr(1);
    const chunks = queryString.split('&');
    const result = chunks.map((chunk) => {
        const [key, value] = chunk.split('=');
        return { key: key, value: value}
    })
    console.log(result);
}

// 앞서 얻은 결과는 객체가 아닌 배열
// 배열을 객체로 변환하고 싶으면 reduce() 사용
function sum(numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
// 첫 번째 인자는 변환 함수, 두 번째 인자는 초깃값

function parse4(qs) {
    const queryString = qs.substr(1);
    const chunks = queryString.split('&');
    const result = chunks.map((chunk) => {
        const [key, value] = chunk.split('=');
        return {key, value};
    })
    .reduce((result, item) => {
        result[item.key] = item.value;
        return result;
    }, {})
    console.log(result)
}