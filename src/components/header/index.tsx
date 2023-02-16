import logo from '../../assets/img/logo.svg'
import { HeaderBar } from '../styled.components'
import { FaBars, FaTimes } from 'react-icons/fa';
import { burgerBtn } from '../../helpers/burgerBtn';
import { closeBurger } from '../../helpers/closeBurger';


const Header = (): JSX.Element => {

  const handleBurger = () => {
    burgerBtn()
   }

  const handleClose = () => {
    closeBurger()
  }  

  return (    
  <HeaderBar id='start'>
     {/* Menu  background*/}
      <div className="menu__bg" id='menu__bg'></div>

      <div className="left__group">
        <div className="logo">
          <img src={logo} alt="Logotype Analytics" />
        </div>
        <nav className="main__menu">
          <a href="#">Products</a>
          <a href="#">Pricing</a>
          <a href="#">FAQ</a>
          <a href="#">Blog</a>
        </nav> 
      </div>
       
        {/* <!-- burger menu --> */} 
        <div className="container-menu" id="container-menu">
          <button onClick= { handleBurger } className="btn-burg" id="btn-burg">
            <FaBars size={23}></FaBars>
          </button>            
        </div>

        <div className="icon__close" id="close">
          <button onClick= { handleClose }>
            <FaTimes size={33}></FaTimes>
          </button>
        </div>

       {/* Menu mobile */}
        <nav className="showMenuMobile " id='showMenuMobile' onClick= { handleBurger } >

          <a href='/' className="animate__animated animate__slideInDown">Home</a>
          <a href="#"className="animate__animated animate__slideInDown">Products</a>
          <a href="#"className="animate__animated animate__slideInDown">Pricing</a>
          <a href="#"className="animate__animated animate__slideInDown">FAQ</a>
          <a href="#"className="animate__animated animate__slideInDown">Blog</a>
        </nav>            

      <div className="right__group">
        <button className="button__text">Sign in</button>
        <button className="button__outlined">Sign Up</button>
      </div>
  </HeaderBar>
  )
}

export default Header