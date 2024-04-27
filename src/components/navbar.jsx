import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contacto</Link>
      </div>
      <div>Happy Cake 🍰</div>
    </nav>
  );
}

export default Navbar;
