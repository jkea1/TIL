Django(장고), Flask, 그리고 FastAPI는 모두 Python으로 작성된 웹 프레임워크로, 웹 애플리케이션 개발을 쉽게 만들기 위해 설계되었다. 이 세 프레임워크의 공통점을 정리하면 다음과 같다.

---

1. Python 기반

세 프레임워크 모두 Python 언어로 작성되었으며, Python의 간결하고 읽기 쉬운 문법을 활용할 수 있다.

</br>

2. HTTP 요청 처리

HTTP 요청을 처리하고 응답을 생성할 수 있는 기능을 제공한다.

`GET`, `POST`, `PUT`, `DELETE`와 같은 HTTP 메서드를 지원한다.

</br>

3. 라우팅 시스템 제공

URL 경로와 뷰(혹은 핸들러)를 연결하는 라우팅 기능을 제공한다.

* Django는 URL 설정 파일을 통해 라우팅을 정의한다.
* Flask와 FastAPI는 데코레이터를 사용하여 라우트를 정의한다.

</br>

4. 템플릿 엔진 지원

HTML을 동적으로 생성할 수 있는 템플릿 엔진을 제공한다.
* Django는 기본적으로 Django Template Language(DTL)를 사용한다.
* Flask는 Jinja2 템플릿 엔진을 기본으로 지원한다.
* FastAPI는 기본적으로 템플릿 엔진이 포함되어 있지 않지만, Jinja2 등 외부 라이브러리를 쉽게 통합할 수 있다.

</br>

5. 미들웨어 지원
요청과 응답의 처리 과정에서 공통 작업(예: 인증, 로깅 등)을 처리할 수 있는 미들웨어를 지원한다.
* Django는 자체적인 미들웨어 시스템을 제공한다.
* Flask는 WSGI 미들웨어를 쉽게 통합할 수 있다.
* FastAPI는 ASGI 기반으로 미들웨어를 지원한다.

</br>

6. RESTful API 구현 가능

RESTful API를 구현할 수 있는 기능을 제공한다.
* Django는 Django REST Framework(DRF)와 같은 추가 라이브러리를 활용한다.
* Flask는 Flask-RESTful이나 Flask-SQLAlchemy 같은 확장 라이브러리로 REST API를 쉽게 개발할 수 있다.
* FastAPI는 REST API 개발을 기본 목적으로 설계되었기 때문에 내장 기능으로 RESTful API를 바로 작성할 수 있다.

</br>

7. ORM 통합 지원

데이터베이스와 상호작용하기 위한 ORM(Object Relational Mapping)을 지원한다.
* Django는 자체 ORM을 내장하고 있다.
* Flask는 SQLAlchemy를 통합하여 ORM 기능을 제공한다.
* FastAPI도 SQLAlchemy나 Tortoise ORM 같은 라이브러리를 사용할 수 있다.

</br>

8. 확장성과 커뮤니티

각 프레임워크는 플러그인이나 확장 기능을 제공하며, 커뮤니티의 지원을 통해 추가적인 기능을 사용할 수 있다.

</br>

> 이 세 프레임워크는 모두 Python 기반 웹 개발에 적합하며, 프로젝트의 요구 사항에 따라 선택하면 된다. Django는 강력한 기본 기능과 구조화된 개발을, Flask는 간결성과 유연성을, FastAPI는 최신 ASGI 기반의 고성능 API 개발을 주로 강조한다.

## 🥸
chat gpt api 로 AI 프로젝트를 하게 되면, 

* 서버: Python + FastAPI + chat gpt api → 백엔드 API 제공
* 클라이언트: Next.js + TypeScript → 프론트엔드 웹 앱 개발

와 같은 구조로 프로젝트하면 될거 같다.

ex.
```
// FastAPI (서버)
from fastapi import FastAPI
import requests

app = FastAPI()

@app.post("/chat")
async def chat_with_gpt(prompt: str):
    api_key = "your-openai-api-key"
    headers = {"Authorization": f"Bearer {api_key}"}
    response = requests.post(
        "https://api.openai.com/v1/chat/completions",
        headers=headers,
        json={
            "model": "gpt-3.5-turbo",
            "messages": [{"role": "user", "content": prompt}],
        },
    )
    return response.json()
```

```
// Next.js (클라이언트)
const sendMessage = async (prompt: string) => {
    const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
    });
    const data = await response.json();
    console.log(data);
};
```