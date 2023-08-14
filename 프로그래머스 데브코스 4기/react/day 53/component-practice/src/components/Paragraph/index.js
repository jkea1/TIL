import PropTypes from 'prop-types'

function Paragraph({ children, size }) {
  return <p style={{ fontSize: size }}>{children}</p>
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.number,
}

export default Paragraph
