import { Typewriter } from 'react-simple-typewriter';
import '../styles/typewriter.css'; // CSS separado (opcional)

export default function TypewriterText() {
  return (
    <div className="typewriter-card">
      <div className="typewriter-wrapper">
        <h1 className="typewriter-title">
          Hello, I'm João Victor and I'm a {' '}
          <span className="highlighted-text">
            <Typewriter
              words={[
                'Frontend Developer',
                'Web Developer',
              ]}
              loop={0} // 0 = infinito
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </span>
        </h1>
      </div>
    </div>
  );
}