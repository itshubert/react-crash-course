import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
  const location = useLocation()

  return (
    <header className="header">
      <h1>{title}</h1>
      {/* <h2 style={subHeadingStyle}>Sub Heading</h2> */}

      { location.pathname === '/' && 
        <Button
          color={showAdd ? 'maroon' : 'teal'}
          text={showAdd ? 'Close' : 'Show Add Task'}
          onClick={onAdd} />
      }
    </header>
  )
}

// Header.defaultProps = {
//   title: 'Task Tracker',
//   addButtonText: 'Toggle'
// }

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// const subHeadingStyle = {
//   color: 'white',
//   backgroundColor: 'black',
//   marginTop: 0
// };

export default Header
