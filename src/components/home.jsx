import "../styles/index.css";
import "../styles/home.css";

import TypewriterText from "../components/typewritertext";

export default function Home() {
  return (
    <section id="home" className="home-section">
      <TypewriterText />

      <div className="home-img-container">

        <img src="/profile.jpg"
        alt="profile picture"
        className="home-img" />
        
      </div>
    </section>
  );
}
