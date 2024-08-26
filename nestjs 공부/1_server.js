// import http from 'http'
const http = require('http')

// localhost -> ip = 127.0.0.1 = loop back = 서버를 실행한 컴퓨터
const host = 'localhost'
const port = 3000

// server 생성
const server = http.createServer((req, res) => {
  // status code 및 헤더 설정가능
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end('<h1>Hello World</h1>')
})

// 어떤 포트와 호스트에서 요청을 들을 건지 설정할 수 있다.
// 3번째 파라미터는 함수 = server.listen 해서 서버가 실행됐을 때 바로 실행할 수 있는 함수를 넣는다.
server.listen(port, host, () => {
  console.log('server running on http://localhost:3000')
})
