import '../styles/index.css'
import  Navbar  from '../components/navbar'
import  Home  from '../components/home'

export default function Index( {onNavbarMouseEnter, onNavbarMouseLeave}) {
    
    return (
        <>

        <Navbar 
        onMouseEnter = {onNavbarMouseEnter}
        onMouseLeave = {onNavbarMouseLeave}
        />

        <Home />

        </>
    )
}