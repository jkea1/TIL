**REST API (RESTful API)**

- **API**란 컴퓨터의 기능을 실행시키거나 어떠한 응용프로그램에서 데이터를 주고 받기 위한 방법을 의미하며, **REST API**란 REST 원칙을 적용하여 서비스 API를 설계한 것을 말합니다.

- 어원
  **REpresentational State Transfer**
  - **대표 상태 전송..?**
  - 자원(Resource)을 의미(Representation)로 구분하여 그 상태를 전달

**REST란**

1. [HTTP](https://tibetsandfox.tistory.com/18) URI(Uniform Resource Identifier)를 통해 자원(Resource)을 명시하고,
2. HTTP Method(`POST`, `GET`, `PUT`, `DELETE`, `PATCH` 등)를 통해
3. 해당 자원(URI)에 대한 **CRUD Operation**을 적용하는 것을 의미합니다.

- **CRUD Operation** 이란?

  - CRUD는 대부분의 컴퓨터 소프트웨어가 가지는 기본적인 데이터 처리 기능인 Create(생성), Read(읽기), Update(갱신), Delete(삭제)를 묶어서 일컫는 말로
    REST에서의 CRUD Operation 동작의 예시는 다음과 같습니다.
    - Create : 데이터 생성 `POST`
    - Read : 데이터 조회 `GET`
    - Update : 데이터 수정 `PUT` `PATCH`
      - `PUT`은 요청시에 수정을 원하는 데이터에 대한 필드를 **모두** 채워서 보내야 하지만
      - `PATCH`는 **일부** 필드만 채워서 보내도 괜찮습니다.
    - Delete : 데이터 삭제 `DELETE`

- 예시

  ![Screenshot 2024-04-01 at 11.10.53 PM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f006fe58-c7ac-429f-9890-f11aa184c23a/e965a7b6-8d25-4029-854b-f5fcc3750796/Screenshot_2024-04-01_at_11.10.53_PM.png)

- swagger-ui
  - swagger-ui 는 Rest API를 문서화하는 툴이고 프론트엔드와 백엔드가 서로 협업할때 자주 사용한다.

---

**🛠️ 용어 공부**

**⚙️ REST**

- REpresentational State Transfer의 약자로 전반적인 웹 어플리케이션에서 상호작용하는데 사용되는 웹 아키텍쳐 모델입니다. 즉, 자원을 주고받는 웹 상에서의 통신 체계에 있어서 범용적인 스타일을 규정한 아키텍쳐 라고 할 수 있습니다.

**⚙️ API**

- Application Programming Interface의 약자로 1. `구글 맵 API, 카카오 비전 API 등 기존에 있는 응용 프로그램을 통해서 데이터를 제공받거나` 2. `기능을 사용하고자 할 때` 사용하는 인터페이스 및 규격을 말합니다. API는 프로그래밍 언어, 운영체제 등에서도 사용 되는 `범용적인 용어`입니다. 따라서, REST API라는 것은 REST 원칙을 적용하여 서비스 API를 설계한 것을 말하며 대부분의 서비스가 REST API를 제공합니다.

**⚙️ 자원**

- 자원(Resource)은 문서, 그림, DB, 이미지, 동영상, 해당 소프트웨어 자체 등의 웹에서 사용되는 모든 자료를 의미합니다.

**⚙️ URI**

- URI는 Uniform Resource Identifier의 약자이며, 리소스(전화,지도,이미지,텍스트)에 접근할 수 있는 유일한(Uniform) 식별자(Identifier)를 의미합니다. URI를 수신하는 기기는 해당 URI에 맞게 데이터를 반환합니다.

**⚙️ CRUD**

- CRUD는 대부분의 컴퓨터 소프트웨어가 가지는 기본적인 데이터 처리 기능인 Create(생성), Read(읽기), Update(갱신), Delete(삭제)를 묶어서 일컫는 말입니다. 사용자 인터페이스가 갖추어야 할 기능(정보의 참조/검색/갱신)을 가리키는 용어로서도 사용됩니다.
