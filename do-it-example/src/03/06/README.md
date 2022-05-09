# 클래스형 컴포넌트

## 깊은 비교와 얕은 비교
- `==` : 깊은 비교, 서로 다른 객체면 false
- `shallowEqual` : 얕은 비교

## Component Vs PureComponent
- Component : 항상 새로 출력
- PureComponent : 얕은 비교를 통해 데이터 변경 시 새로 출력