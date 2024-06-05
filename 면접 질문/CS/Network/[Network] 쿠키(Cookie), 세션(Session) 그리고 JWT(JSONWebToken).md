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

### **쿠키**

쿠키는 브라우저 로컬에 `key:value` 쌍으로 저장되는 데이터 파일입니다. 유효시간 내에서는 브라우저가 종료되어도 계속 유지됩니다.

### **세션**

세션은 브라우저가 종료되거나 서버에서 해당 세션을 삭제하면 삭제 할 수 있기 때문에 쿠키보다 보안성이 좋습니다. 또한 서버에서 데이터를 저장하므로 서버 용량이 허용하는 한 제한 없이 데이터를 저장할 수 있 수 있다는 장점이 있습니다. 하지만 양면적으로 이로 인해 서버의 부하가 커질 수 있습니다.

### **세션 vs 세션 스토리지 ( 세션 예시와 세션 스토리지 코드 예시 첨부하자. )**

**세션**

서버 측에서 관리되는 사용자의 상태나 데이터를 의미합니다.

**세션 스토리지**

웹 스토리지 객체인 local storage 와 session storage 중 하나로 브라우저 내에서 탭 또는 창 별로 독립적으로 데이터를 저장하는 메커니즘입니다. 브라우저내에 key-value 쌍을 저장할 수 있게 해줍니다. localStorage와 sessionStorage를 사용하면 페이지를 새로고침해도 데이터를 보존할 수 있고 localStorage를 사용할 경우 심지어 브라우저를 다시 실행해도 데이터가 사라지지 않고 남아있습니다.

### 쿠키를 사용하면 브라우저에 데이터를 저장할 수 있는데 , 왜 웹 스토리지 객체를 사용해 데이터를 저장하는 걸까?

1.  용량 제한

쿠키는 일반적으로 도메인당 약 4KB의 데이터만 저장할 수 있습니다. 로컬 스토리지와 세션 스토리지는 일반적으로 도메인당 약 5KB에서 10KB까지 데이터를 저장 할 수 있습니다.

2.  네트워크 트래픽

쿠키는 매번 서버와의 요청과 응답 시마다 함께 전송됩니다. 이는 불필요한 네트워크 트래픽을 증가시키고 성능에 영향을 줄 수 있습니다. 반면에 로컬 스로리지와 세션 스토리지는 클라이언트 측i에만 저장되며, 서버로 전송되지 않으므로 네트워크 트래픽에 영향을 주지 않습니다.

3.  보안 문제

쿠키는 특히 세션 관리에 자주 사용되며(잉?), 이를 악용한 세션 하이재킹 공격이 있을 수 있습니다. HTTPS를 사용하여 쿠키를 암호화하거나 HttpOnly 속성을 설정하여 자바스크립트에서 접근할 수 없도록 해야 합니다.

로컬 스토리지와 세션 스토리지는 클라이언트 측에 저장되며, 쿠키와 달리 자동으로 서버로 전송되지 않기 때문에 이러한 종류의 공격에 덜 취약합니다. 그러나 여전히 자바스크립트에서 접근할 수 있으므로 XSS 공격에 주의해야 합니다.

4.  데이터 만료

쿠키의 key와 value는 문자열 형태로 저장되기 때문에 데이터 형식의 관리가 까다로울 수 있습니다. 로컬 스토리지와 세션

쿠키와 다르게 웹 스토리지 객체는 네트워크 요청 시 서버로 전송되지 않습니다. (쿠키는 네트워크 요청 시 서버로 전달되나?) 이 때문에 쿠키보다 더 많은 자료를 보관할 수 있습니다. (2MB 혹은 그 이상) 또한 쿠키와 다르게 서버가

### 🦋 참고 자료

[로그인방식에 대한 고찰(session ID, Token방식)](https://velog.io/@chhw130/%EB%A1%9C%EA%B7%B8%EC%9D%B8%EB%B0%A9%EC%8B%9D%EC%97%90-%EB%8C%80%ED%95%9C-%EA%B3%A0%EC%B0%B0session-ID-Token%EB%B0%A9%EC%8B%9D)

[localStorage와 sessionStorage](https://ko.javascript.info/localstorage)

[HTTP 프로토콜](https://docs.tosspayments.com/resources/glossary/http-protocol#http-%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C)
