const express = require('express')
const path = require('path')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')

const app = express()

app.set('port', process.env.PORT || 3000)

app.use(morgan('combined'))
app.use(cookieParser())

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
  console.log('/ get 요청')
})

app.post('/', (req, res) => {
  res.send('hello express')
})

app.get('/category/:name', (req, res) => {
  res.send(`hello ${req.params.name}`)
})

app.get('/about', (req, res) => {
  res.send('hello express')
})

// 404 처리 미들웨어 역할을 하게 된다.
// 위에서 걸리는게 하나도 없어 아래의 코드가 실행되었다는 의미는
// 요청에 해당하는 코드가 없다는 뜻이니 404에러 상황에 해당한다.
app.use((req, res, next) => {
  res.status(404).send('404지롱')
})

// 에러 미들웨어
app.use((err, req, res, next) => {
  console.error(err)

  res.send('에러났지롱. 근데 안알려주지롱')
})

app.listen(3000, () => {
  console.log('express server start!')
})
