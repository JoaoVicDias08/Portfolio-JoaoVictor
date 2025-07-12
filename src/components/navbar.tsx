import '../styles/index.css'
import '../styles/navbar.css'

export default function Navbar() {
    return (
        <div className="nav-container">
            <nav className="nav-field">
                <ul className="nav-list">
                    <li className="nav-item">
                        <a href="#home" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-link">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#projects" className="nav-link">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}