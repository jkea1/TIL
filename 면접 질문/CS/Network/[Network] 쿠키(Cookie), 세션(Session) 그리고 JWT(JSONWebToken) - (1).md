# [Network] 쿠키(Cookie), 세션(Session) 그리고 JWT(JSONWebToken) - (1) HTTP

### **쿠키와 세션을 이용하는 이유 : HTTP**

먼저 쿠키와 세션의 등장 배경을 설명하기 위해 HTTP에 대해 잠시 설명하려 합니다.

#

HTTP(HyperText Transfer Protocol)는 request(요청)/response(응답) 구조로 웹에서 브라우저가 서버와 통신하여 데이터를 주고 받는 규칙을 말합니다. 클라이언트가 HTTP request를 서버에 보내면, 서버는 HTTP response 를 보내는 식으로 동작합니다.

#

브라우저와 서버가 주고받는 요청과 응답의 형태를 더 자세히 살펴보면

#

request message는 첫 줄(method, url path, HTTP version) + 두 번째 줄(headers) + body로 이뤄어져 있습니다.

#

```
GET /index.html HTTP/1.1
Host: example.com
User-Agent: Mozilla/5.0
Accept-Language: ko-KR
```

#

두 번째 줄부터 모두 HTTP 요청의 헤더로 `key:value` 쌍으로 이뤄져 있습니다. 헤더는 웹사이트 도메인의 호스트, 언어, 사용자의 브라우저 등 서버가 필요한 정보를 전달합니다.

#

response message는 status line(HTTP version, status code, status message) + headers + body 로 이루어져 있습니다.

#

```
HTTP/1.1 200 OK
Date: Sat, 09 Oct 2023 14:28:02 GMT
Server: Apache
Content-Type: text/html

<html>
...
</html>
```

#

request와 동일하게 두 번째 줄부터는 헤더로, `key:value` 쌍이고 브라우저에 필요한 정보를 전달해 줍니다. body 부분에는 브라우저가 요청한 데이터를 담을 수 있는데 위의 예시 같은 경우에는 HTML 데이터를 돌려주고 있습니다.

#

HTTP는 서버에 연결 후 요청에 대한 응답을 받으면 TCP/IP 연결을 끊어버리는 **Connectionless(비연결성)** 특성을 가지고 있습니다. 이로 인해 많은 사람들이 웹을 이용하더라도 실제 동시 접속을 최소화 하여 더 많은 유저의 요청을 처리할 수 있습니다. 하지만 연결을 끊었기 때문에, 클라이언트의 이전 상태(ex.로그인 유무)를 보존하지 않는다는 **Stateless(비상태성)** 특성이 생기게 됩니다. 정보를 유지 할 수 없는 Connectionless, Stateless 특성을 가진 HTTP의 단점을 해결하기 위해, Cookie, Session, JWT 등이 도입되었습니다.

#

> 🔅 HTTPS
> HTTP는 정보를 text 형식으로 주고받기 때문에 중간에 인터셉트 할 경우 데이터 유출이 발생할 수 있다는 문제가 있어서 HTTP에 암호화를 추가한 프로토콜이 바로 HTTPS 입니다.

#

### HTTP의 Connectionless(비연결성)과 Stateless(비상태성)을 해결하기 위해 등장한 쿠키(Cookie)와 세션(Session)

쿠키와 세션을 사용하는 이유는 HTTP의 Connectionless(비연결성)과 Stateless(비상태성)라는 특징 때문입니다. 클라이언트가 요청(request)을 했을 때 그 요청에 맞는 응답(response)을 보낸 후 연결을 끊고, 서버는 클라이언트에 대한 상태 정보를 유지하지 않기 때문에 연결이 끊어 지기 전 상태를 알 수 없게 됩니다.

#

만약 쿠키와 세션을 사용하지 않는다면 로그인을 했음에도 url path를 바꿔가며 페이지를 이동할 때 마다 계속 로그인을 해야 할 것 입니다. 또한 쿠키와 세션을 이용하면, 아이디와 비밀번호를 저장하여 재방문 할 때에도 해당 아이디와 비밀번호를 불러 올 수 있습니다.
