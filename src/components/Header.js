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

export default Header
