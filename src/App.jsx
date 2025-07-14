import { useState, useEffect } from "react";
import MouseEffect from "./components/MouseEffect";
import Index from "./pages/index";
import "./styles/index.css";

function App() {
  const [effectActive, setEffectActive] = useState(true);
  const [isHoveringNavbar, setIsHoveringNavbar] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouse(e) {
      setMousePos({ x: e.clientX, y: e.clientY });
      const elUnderMouse = document.elementFromPoint(e.clientX, e.clientY);

      const isScrollbar =
        !elUnderMouse ||
        elUnderMouse.tagName === "BODY" ||
        elUnderMouse === document.documentElement;

      if (isScrollbar || isHoveringNavbar) {
        setEffectActive(false);
      } else {
        setEffectActive(true);
      }
    }

    function handleMouseLeave() {
      setEffectActive(false);
    }

    function handleMouseEnter(e) {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isHoveringNavbar) {
        setEffectActive(true);
      }
    }

    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isHoveringNavbar]);

  return (
    <>
      <MouseEffect
        active={effectActive && !isHoveringNavbar}
        mousePos={mousePos}
      />

      <Index
        onNavbarMouseEnter={() => setIsHoveringNavbar(true)}
        onNavbarMouseLeave={() => setIsHoveringNavbar(false)}
      />
    </>
  );
}

export default App;