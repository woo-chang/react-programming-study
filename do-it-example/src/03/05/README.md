# 컴포넌트의 생명주기

## constructor(props) 함수
- 맨 처음 생성될 때 한 번만 호출
- `super()` 함수를 가장 위에 호출
  - 프로퍼티와 생명 주기 상태 등을 초기화하는 중요한 과정 포함

## render() 함수
- 데이터가 변경되어 새 화면을 그려야할 때 자동으로 호출되는 함수

## componentDidMount() 함수
- render()함수가 JSX를 화면에 그린 이후 호출되는 함수

## componentWillUnmount() 함수
- 컴포넌트가 소멸되기 직전에 호출되는 함수