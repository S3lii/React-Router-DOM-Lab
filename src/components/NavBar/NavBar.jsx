import { Link } from 'react-router'

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <br />
      <Link to="/products">Products</Link>
      <br />
      <Link to="/new-product">New Products</Link>
    </nav>
  )
}

export default NavBar
