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

<br><br>

## 5. Routing
- [ Link ] NextJS 애플리케이션에 클라이언트 사이드 네비게이션을 제공

  ```jsx
  <nav>
    <Link href="/">
        <a>Home</a>
    </Link>
    <Link href="/about">
        <a>About</a>
    </Link>
  </nav>
  ```
- [ Router Hook ] location 정보 활용

  ```jsx
  import { useRouter } from 'next/router';

  export default function NavBar() {
    const router = useRouter(); // location info object
    //...
  }
  ```

<br><br>

## 6. CSS Modules
- 페이지가 빌드될 때, NextJS가 클래스 이름을 무작위로 바꿈 (클래스이름 충돌 방지)
- 두개 이상의 클래스이름을 동일한 엘리먼트에 적용하기

  ```jsx
    <nav>
      <Link href="/">
          <a className={`${styles.link} ${router.pathname === "/" ? styles.active : ""}`}>Home</a>
      </Link>
      <Link href="/about">
          <a className={[ styles.link, router.pathname === "/about" ? styles.active : "", ].join(" ")}>About</a>            
      </Link>
    </nav>
  ```
  
<br><br>

## 7. Styles JSX
- 스타일을 오직 해당 컴포넌트 내부로 범위 한정 (클래스이름 충돌 방지)

  ```jsx
    <style jsx>{`
        nav {
            background-color: tomato;
        }
        a {
            text-decoration: none;
        }
        .active {
            color: ${props.color};
        }
    `}</style>
  ```