## 컴포넌트와 구성 요소

### 컴포넌트의 개념
- 기존 MVC 모델
    - Model(정보)
    - View(화면)
    - Controller(구동)
    => 코드 관리의 효율을 좋으나, 의존성이 높아 재활용이 어렵다
- 재활용이 쉽도록 하기 위해 컴포넌트 개념 등장

<br>

### 컴포넌트 생성
- 컴포넌트의 첫 글자는 대문자 -> HTML 태그와 구분하기 위해

<br>

### 파일 확장자 생략이 가능한 이유
- 웹팩 코드 검색 확장자 기능 덕분
    - 확장자 기능을 참조
1. 파일 이름 확인
2. 존재하지 않으면 확장자 목록을 보고 순서대로 파일 확인
3. 파일이 없다면 폴더 이름으로 확인
4. 폴더 안에서 index 파일을 확장자 목록을 보고 순서대로 확인

<br>

### 컴포넌트 구성 요소 미리 살펴보기
- `프로퍼티` : 상위 컴포넌트에서 하위 컴포넌트로 전달되는 읽기 전용 데이터
- `state` : 컴포넌트의 상태를 저장하고 변경할 수 있는 데이터
- `컨텍스트` : 부모 컴포넌트에서 생성하여 모든 자식 컴포넌트에 전달하는 데이터