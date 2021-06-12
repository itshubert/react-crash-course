import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {

  return (
    <button onClick={onClick} className="btn btn-primary" style={{ backgroundColor: color}}>
      {text}
    </button>
  )
}

Button.defaultProps = {
  color: 'steelBlue'
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string
}

export default Button