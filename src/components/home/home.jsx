import "../../styles/index.css";
import "../../styles/home.css";
import TypewriterText from "../typewritertext";

export default function Home({
  onMouseEnterInteractive,
  onMouseLeaveInteractive
}) {
  function handleMouseLeave(e) {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      onMouseLeaveInteractive();
    }
  }

  return (
    <section className="home-section">
      <div className="home-content">
        <div className="home-info">
          <div
            onMouseEnter={onMouseEnterInteractive}
            onMouseLeave={handleMouseLeave}
          >
            <TypewriterText />
            <div className="home-buttons">
              <a href="#projects" className="home-btn-project">
                Projetos
              </a>
              <a href="#contact" className="home-btn-contact">
                Contato
              </a>
            </div>
          </div>
        </div>
        <div className="home-img-container">
          <img
            src="/Portfolio-JoaoVictor/profile.jpg"
            alt="profile picture"
            className="home-img"
          />
        </div>
        
          
      </div>
    </section>
  );
}