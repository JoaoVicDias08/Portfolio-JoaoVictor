import "../styles/index.css";
import "../styles/navbar.css";

export default function Navbar({ onMouseEnter, onMouseLeave }) {
  return (
    <div
      className="nav-container"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <nav className="nav-field">
        <h2 className="nav-title">João Victor</h2>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
