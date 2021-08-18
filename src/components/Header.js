import PropTypes from 'prop-types'

const Header = ({ title }) => {
  return (
    <div>
      <header>
        <h1>{title}</h1>
      </header>
    </div>
  )
}

Header.defaultProps = {
  title: 'Task Tracker'
}

Header.propTypes = {
  title: PropTypes.string
}

// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black'
// }

export default Header
