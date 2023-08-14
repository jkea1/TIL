import logo from './logo.svg'
// import PropTypes from 'prop-types'

function Logo({ size }) {
  return (
    <img
      src={logo}
      className='App-logo'
      alt='logo'
      style={{ width: size, height: size }}
    />
  )
}

// 비구조화 할당을 이용하면 default 값을 정해주지 않아도 된다.
Logo.defaultProps = {
  size: 200,
}

// Logo.propTypes = {
//   // propTypes를 이용해서 타입을 제한 할 수 있다.
//   size: PropTypes.number,
// }

export default Logo
