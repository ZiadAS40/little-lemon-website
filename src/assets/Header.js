import Logo from './Logo'
import Nav from "./Nav"

function Header(){
    return (
        <>
        <header className = "header ">
         <div className='container header-style'>

        <Logo/>
        <Nav/>

         </div>
        </header>
        </>
    )
}


export default Header