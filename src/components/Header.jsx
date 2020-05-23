import React from 'react';
import '../styles/components/header.scss'
import logo from '../assets/static/logo-platzi-video-BW2.png'
import userIcon from '../assets/static/user-icon.png'

const Header = () => (
/* jsx needs to be wrapped between () not {}*/
<header className="header">
  <img className="header__img" src={logo} alt="Platzi Video" />
  <div className="header__menu">
    <div className="header__menu--profile">
      <img src={userIcon}/>
      <p>Perfil</p>
    </div>
    <ul>
      <li><a href="/">Cuenta</a></li>
      <li><a href="/">Cerrar Sesión</a></li>
    </ul>
  </div>
</header>

)
export default Header;
