# NextJS Introduction <br>

<br>

## 1. Creating a Project

    `npx create-next-app@latest —typescript`

<br><br>

## 2. Difference between framework and library

- [library] : 우리가 원할 때 불르고, 원할 때 사용하는 것 (React.js)
- [framework] : 규칙을 따라서 올바른 위치에 직접 코드를 작성하면, framework가 코드를 불러서 사용하는 것 (Next.js)

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