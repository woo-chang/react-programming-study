// 스로틀
// 입력하는 동안에도 바로 이전에 요청한 작업을 주기적으로 실행한다는 점이 디바운스 개념과 다름
// 예) 페이스북의 타임라인 스크롤
function throttle(func, delay) {
    let lastFunc;
    let lastRan;
    return function(...args) {
        const context = this;
        if (!lastRan) {
            func.call(context, ...args);
            lastRan = Date.now();
        } else {
            if (lastFunc) clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if ((Date.now() - lastRan) >= delay) {
                    func.call(context, ...args);
                    lastRan = Date.now();
                }
            }, delay - (Date.now() - lastRan));
        }
    }
}
var checkPosition = () => {
    const offset = 500;
    const currentScrollPosition = window.pageYOffset;
    const pageBottomPosition = document.body.offsetHeight - window.innerHeight - offset;
    if (currentScrollPosition >= pageBottomPosition) {
        console.log('다음 페이지 로딩');
    }
};
var infiniteScroll = throttle(checkPosition, 300);
window.addEventListener('scroll', infiniteScroll);