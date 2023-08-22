import PropTypes from 'prop-types'

const Board = ({ articles }) => {
  return (
    <ul>
      {articles.map((article) => (
        <li>
          {article.id} | {article.title}
        </li>
      ))}
    </ul>
  )
}

Board.propTypes = {
  article: PropTypes.array,
}

export default Board
