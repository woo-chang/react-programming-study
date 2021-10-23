// 비동기 함수
// 비동기 처리 : 작업 시간이 많이 필요한 작업 A를 처리하느라 다른 작업들이 대기하고 있는 상태라면 일단 다른 작업 먼저 진행
// 대표적인 예는 서버에 데이터를 요청하고 결과를 기다리는 과정

// 기존 자바스크립트는 비동기 작업을 위해 지연 작업이 필요한 함수에 setTimeout() 함수를 이용
// 지연 작업 완료 이후에 실행되어야 하는 함수는 지연 작업 함수의 인자로 전달하여 처리

function work1(onDone) {
    setTimeout(() => onDone('작업1 완료!'), 100);
}
function work2(onDone) {
    setTimeout(() => onDone('작업2 완료!'), 200);
}
function work3(onDone) {
    setTimeout(() => onDone('작업3 완료!'), 300);
}
function urgentWork() {
    console.log('긴급 작업');
}

work1(function (msg1) {
    console.log('done after 100ms: ' + msg1);
    work2(function (msg2) {
        console.log('done after 300ms: ' + msg2);
        work3(function (msg3) {
            console.log('done after 600ms: ' + msg3);
        })
    })
})
urgentWork();

// 콜백 함수가 총 3개의 계단 모양으로 되어 있음
// 이를 콜백 지옥이라고 부름

// ES6의 비동기 함수 처리
// 콜백 지옥을 해결하기 위해 Promise 클래스 함수를 구현
// 이는 실제 Promise가 아닌 이해를 돕기 위한 클래스
class Promise {
    constructor(fn) {
        const resolve = (...args) => {
            if (typeof this.onDone === 'function') {
                this.onDone(...args);
            }
            if (typeof this.onComplete === 'function') {
                this.onComplete();
            }
        }
        const reject = (...args) => {
            if (typeof this.onError === 'function') {
                this.onError(...args);
            }
            if (typeof this.onComplete === 'function') {
                this.onComplete();
            }
        }
        fn(resolve, reject);
    }
    then(onDone, onError) {
        this.onDone = onDone;
        this.onError = onError;
        return this;
    }
    catch(onError) {
        this.onError = onError;
        return this;
    }
    finally(onComplete) {
        this.onComplete = onComplete;
        return this;
    }
}

const pWork1 = () => {
    new Promise((resolve) => {
        setTimeout(() => resolve('작업1 완료!'), 100);
    })
}
const pWork2 = () => {
    new Promise((resolve) )
}