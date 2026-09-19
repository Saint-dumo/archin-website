import "../styles/Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <a href="/" className="navbar-logo">
        <img src="/src/assets/archin-logo.png" alt="ARCHIN INT'L" />
      </a>

      <nav className="navbar-links">
        <a href="#work">Work</a>
        <a href="#services">Services</a>
        <a href="#studio">Studio</a>
        <a href="#contact">Contact</a>
      </nav>

      <button className="navbar-menu" aria-label="Open menu">
        <span></span>
        <span></span>
      </button>
    </header>
  );
}

export default Navbar;