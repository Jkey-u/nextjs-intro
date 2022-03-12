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

<br><br>

## 8. Custom APP
- Next.js는 App 컴포넌트를 사용하여 page를 초기화한다. 이를 재정의하고 페이지 초기화를 제어할 수 있다.
  - 페이지 변경 간에 레이아웃 유지
  - 페이지 탐색 시 state 유지
  - componentDidCatch를 사용한 Custom 에러 처리
  - 페이지에 추가 데이터 삽입
  - Global CSS 추가<br><br>

- 기본 App을 재정의하려면 아래와 같이 ./pages/_app.js 파일을 만든다.

  ```jsx
    function App({ Component, pageProps }) {
      return < Component {...pageProps} />
    }
  ```
<br><br>

## 9. Head(next/head)
- 페이지 head에 엘리먼트를 추가하기 위한 내장 컴포넌트를 노출

  ```jsx
    import Head from "next/head";

    export default function Seo({ title }) {
        return (
            <Head>
                <title>{title} | Next Movies</title>
            </Head>
        )
    }
  ```

<br><br>

## 10. Redirect and Rewrite
- [ Redirects ]
  - Redirect을 사용하면 들어오는 request 경로를 다른 destination 경로로 Redirect할 수 있다
  - redirects은 새 페이지로 reroute되고 URL을 변경한다<br><br>

- [ Rewrites ]
  - Rewrites를 사용하면 들어오는 request 경로를 다른 destination 경로에 매핑할 수 있다
  - Rewrites은 URL 프록시 역할을 하고 destination 경로를 mask하여 사용자가 사이트에서 위치를 변경하지 않은 것처럼 보이게 한다 (URL변경되지 않음)

<br><br>

## 11. Server Side Rendering
- [ getServerSideProps ] : Server Side를 통해 props를 page로 보냄

  - 페이지에서 getServerSideProps(서버 측 렌더링)라는 함수를 export하는 경우,
    Next.js는 getServerSideProps에서 반환된 데이터(fetch)를 사용하여 각 request에서 이 페이지를 pre-render한다.
    
  - getServerSideProps는 서버 측에서만 실행되며 브라우저에서는 실행되지 않는다<br>

    ```jsx
      export default function Page({ data }) {
        // Render data...
      }

      // This gets called on every request
      export async function getServerSideProps() {
        // Fetch data from external API
        const res = await fetch(`https://.../data`)
        const data = await res.json()

        // Pass data to the page via props
        return { props: { data } }
      }
    ```
<br><br>

## 12. Dynamic Routes
- Next.js에서는 page에 대괄호를 추가하여 Dynamic Routes를 생성할 수 있다
- /post/1, /post/abc 등과 같은 모든 경로는 'pages/post/[pid].js' 와 일치한다

<br><br>

## 13. Detail Page
- [ router.push( url, as, options ) ]

  - 클라이언트측 전환 처리 (next/link 가 적절하지 않은 경우에 유용)
  - [ url ] UrlObject | String : 탐색할 URL
  - [ as ] UrlObject | String : 브라우저 URL 표시줄에 표시될 경로 (URL masking)
      
      ```jsx
        router.push({
          pathname: '/post/[pid]',
          query: { pid: post.id },
        }, '/post/[pid]');
      ```