#### One Bite TypeScript

[한 입 크기로 잘라먹는 타입스크립트 블로그](https://ts.winterlood.com/6c9bf87f-6a8f-4e96-95b4-5e12d9f82165#c8a5f8ebaa7d4692a90e3d743bb21dea)

[GitHub](https://github.com/winterlood/onebite-typescript/tree/main)

- `tsconfig.json`

  - TypeScript Configuration
  - TypeScript Compiler(TS -> JS)의 설정 파일이다.
  - 처음에는 대부분 주석 처리 되어 있어 적용되고 있는 설정이 별로 없다.
  - `moduleDetection`
    - TS의 모든 파일은 기본적으로 전역 파일(모듈)로 취급되기 때문에 만약 a.ts와 b.ts 두 타입스크립트 파일을 만들고 동일한 이름의 변수를 선언하면 오류가 발생한다.이럴 때에는 각 파일에 모듈 시스템 키워드(export, import)를 최소 하나 이상 사용해 해당 파일을 전역 모듈이 아닌 로컬(독립) 모듈로 취급되도록 만들어야 하는데 이를 자동화 하는 옵션이 바로 moduleDetection 옵션이다.
    - `skipLibCheck`
      - 위 옵션은 타입 정의 파일(.d.ts 확장자를 갖는 파일을 의미합니다 우리 수업에서는 나중에 배웁니다)의 타입 검사를 생략하는 옵션이다.
      - 보통 타입 정의 파일은 라이브러리에서 사용하는데 가끔 라이브러리의 타입 정의 파일에서 타입 오류가 발생하는 일이 발생할 수 있다. 따라서 해당 옵션을 true로 설정하면 불필요한 타입 정의 파일의 타입 검사를 생략할 수 있다.
        </br>

  ```
  // tsconfig.json
  {
    "compilerOptions": { // 상세한 옵션을 성정할 때에는 compilerOptions 항목 안에다가 옵션을 설정한다.
      "target": "ESNext", // 컴파일된 js의 버전을 설정해주는 옵션이다.
      "module": "ESNext", // 모듈 시스템을 설정할 수 있다.
      "outDir": "dist", // 컴파일 결과 생성되는 js 파일의 위치를 설정할 수 있다. 이 경우에는 dist 폴더에 컴파일된 JS 파일을 모아둘 수 있다.
      "strict": true, // ⭐️ 얼마나 엄격하게 타입을 검사할지 결정한다.
      "moduleDetection": "force", // ⭐️ 다음과 같이 moduleDetection 옵션을 force로 설정할 경우 자동으로 모든 타입스크립트 파일이 로컬 모듈(독립 모듈)로 취급됩니다.
      "skipLibCheck": true // 위 옵션은 타입 정의 파일(.d.ts 확장자를 갖는 파일을 의미합니다 우리 수업에서는 나중에 배웁니다)의 타입 검사를 생략하는 옵션이다.
    },
    "ts-node" : {
      "esm": true
    },
    "include": ["src"] // tsc 뒤에 경로를 붙이지 않아도 src 폴더 아래의 모든 ts 파일을 js 파일로 컴파일 해준다.
  }

  ```

- `"type": "module"`, 을 package.json 파일에 추가 해 줘야 `node dist/index.js` 으로 js 파일이 가능하다.
  ```
  "ts-node" : {
    "esm": true
  }
  ```
  - `tsnode` 로도 `esmodule` 시스템을 실행하기 위해서는 tsnode 옵션을 만들어서 `esm` 옵션을 `true`로 설정해주면 된다.