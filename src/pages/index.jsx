import "../styles/index.css";
import Navbar from "../components/navbar";
import Home from "../components/home/home";
import About from "../components/about/about";

export default function Index({ onNavbarMouseEnter, onNavbarMouseLeave }) {
  return (
    <>
      <Navbar
        onMouseEnter={onNavbarMouseEnter}
        onMouseLeave={onNavbarMouseLeave}
      />

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>
    </>
  );
}
