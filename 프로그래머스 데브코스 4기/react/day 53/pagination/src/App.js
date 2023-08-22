// 클라이언트 단에서 페이지네이션 한 방법이다.

import Board from './components/Board'
import Pagination from './components/Pagination'
import { useState } from 'react'

function App() {
  const [page, setPage] = useState(0)
  const articles = new Array(100).fill().map((_, i) => ({
    id: i,
    title: `${i}번 게시물`,
  }))

  const limit = 10 // 한 페이지에 들어갈 페이지 수
  const offset = page * limit

  return (
    <div>
      <Pagination
        defaultPage={0}
        limit={limit}
        total={articles.length}
        onChange={setPage}
      />
      <Board articles={articles.slice(offset, offset + limit)} />
    </div>
  )
}

export default App
