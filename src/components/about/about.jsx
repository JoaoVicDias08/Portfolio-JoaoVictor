import "../../styles/index.css";
import "../../styles/about.css";

const icons = [
  "react-icon.svg",
  "js-icon.png",
  "tailwind-icon.jpg",
  "sass-icon.png",
  "ts-icon.png",
  "github-icon.png"
];

export default function About() {
  return (
    <section className="about-section">

      <div className="about-icons-card">
        <h2 className="about-card-title">Technologies I Use</h2>
        <div className="about-icons-list">
          {icons.map(icon => (
            <img
              key={icon}
              src={`/Portfolio-JoaoVictor/icons/${icon}`}
              alt={icon.replace("-icon", "").replace(/\..+$/, "")}
              className="about-tech-icon"
            />
          ))}
        </div>
      </div>
      <div className="about-content">
        <div className="about-card">
          <h2 className="about-title">Who I Am?</h2>
          <p className="about-text">
            I'm João Victor, a student at Etec de Peruíbe, currently studying
            Systems Development in the 2nd year.
          </p>
          <p className="about-text">
            I'm currently studying{" "}
            <span className="highlight-react">React</span>, React Native,
            Next.js, JavaScript,
            <span className="highlight-typescript">TypeScript</span> and Css
            frameworks like{" "}
            <span className="highlight-tailwind">TailwindCss</span>.
          </p>
          <p className="about-text">
            I intend to graduate and pursue a career in technology and
            programming as a frontend developer.
          </p>
        </div>
      </div>
    </section>
  );
}
