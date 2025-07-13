import { useEffect, useState } from 'react';
import MouseBlur from './components/MouseBlur';
import  Index  from './pages/index'
import './styles/index.css'

function App() {
        const [effectActive, setEffectActive] = useState(true);
        const [mousePosition, setMousePosition] = useState( {x:0, y:0 } );

          useEffect(() => {
            function handleMouse(e) {
              setMousePosition({ x: e.clientX, y: e.clientY});
            }
            window.addEventListener('mousemove', handleMouse);
            return() => window.removeEventListener('mousemove', handleMouse);
          }, []);

  return (
    <>
      <div>

        {effectActive && <MouseBlur position={mousePosition}/>}
        
        <Index 
        onNavbarMouseEnter = {() => setEffectActive(false)}
        onNavbarMouseLeave = {() => setEffectActive(true)}
        />
    
      </div>
    </>
  )
}

export default App
