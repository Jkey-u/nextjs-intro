# NextJS Introduction <br>

<br><br>

## 1. Creating a Project

    >> npx create-next-app@latest —typescript

<br><br>

## 2. Difference between framework and library

- [ library ] : 우리가 원할 때 불르고, 원할 때 사용하는 것 (React.js)
- [ framework ] : 규칙을 따라서 올바른 위치에 직접 코드를 작성하면, framework가 코드를 불러서 사용하는 것 (Next.js)

<br><br>

## 3. Pages

- export default function (Component의 이름은 중요하지 않음)

  ```jsx
  export default function Hello() {
    return "About us";
  }
  ```

- URL의 이름은 pages 폴더 하위의 파일명
- 앱의 홈은 기본적으로 index.js
- jsx를 사용중이라면, React.js를 import할 필요가 없음

<br><br>

## 4. Static Pre Rendering
- [ React.JS ] Client-side rendering    
  1. 브라우저가 자바스크립트 코드 요청
  2. Client-side의 자바스크립트가 모든 UI를 생성
- [ Next.JS ] Pre rendering
  1. 앱에 있는 페이지가 초기 상태의 Component로 미리 렌더링 된다 (HTML 페이지)
  2. React.js 실행 ( hydration : react.js를 프론트엔드 내부(next.js)에서 실행하는 것 )