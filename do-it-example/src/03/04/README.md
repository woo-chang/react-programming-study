# 컴포넌트 상태 관리하기

## state로 상태 관리하기
- `state`는 값을 저장하거나 변경할 수 있는 객체
- state에 저장되는 객체는 반드시 `초기화`

## state값은 setState() 함수로 변경합니다
- `setState()` 함수를 호출하여 변경하면 리액트 엔진이 자동으로 `render()` 함수를 호출하므로 변경된 값 새롭게 출력

## 클래스 인스턴스 변수와 forceUpdate()함수로 state 관리하기
```javascript
this.loading = true;
this.formData = 'no data';
// state가 아닌 인스턴스 변수로 선언 및 초기화

// 해당 변수를 변경하는 함수에서 forceUpdate() 함수 호출
this.forceUpdate();
```
- state를 사용하지 않더라도 같은 효과
- 리액트 성능에 제약이 존재하므로 가급적 사용하지 않기를 권한다