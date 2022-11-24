import React, {useState} from 'react';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.svg' 
import './navbar.css';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='gpt3__navbar'>
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links-logo">
          <img src={logo} alt="" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#gpt3">What is GPT3</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign In</p>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu 
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}></RiCloseLine> : <RiMenuLine color='#fff' size={27} onClick={() => setToggleMenu(true)}></RiMenuLine>
        }
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
          <p><a href="#home">Home</a></p>
          <p><a href="#gpt3">What is GPT3</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
        <p>Sign In</p>
        <button type='button'>Sign Up</button>
        </div>
          </div>
        )}
      </div>

    </div>
  )
}

export default Navbar