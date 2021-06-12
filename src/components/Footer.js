import { Link } from 'react-router-dom'
import './Footer.scss'

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2021</p>
      <Link to="/about">About</Link>
    </footer>
  )
}

export default Footer
