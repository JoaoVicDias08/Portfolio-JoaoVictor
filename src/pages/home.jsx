import '../styles/index.css'
import '../styles/home.css'
import  Navbar  from '../components/navbar'

export default function Home() {
    return (
        <>

        <Navbar />

        <section id="home" className="home-section">
            <h1 className="home-title">Olá</h1>
            <p className="home-text">eu sou joão</p>
        </section>

        </>
    )
}