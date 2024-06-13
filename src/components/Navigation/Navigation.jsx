import React, { useState } from 'react'
import Logo from './../../assets/images/Geljegim.png'
import './Navigation.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

function Navigation() {
    const navigate = useNavigate()
    const [MenuBarIsOpen, setMenuBarIsOpen] = useState(false)
    function MenuOpenClose() {
        setMenuBarIsOpen(!MenuBarIsOpen)
    }
    function goHome() {
        navigate('/')
    }
    function goSearch() {
        navigate('/search')
    }
    function goList(typear) {
        var allNavLinks = document.querySelectorAll('.nav__link')
        const ele = document.getElementById(`${typear}`) 
        ele.classList.add('active')
        allNavLinks.forEach(function(e){
            e.classList.remove('active');
        })
        ele.classList.add('active')
        navigate('/articles', {state:typear})
    }

  return (
    <div className="navigation__wrapper">
        <div className="container">
            <div className="navigation">
                <div className="navigation__logo">
                    <img onClick={() => goHome()} src={Logo} alt="" />
                </div>
                <div className="navigation__menu">
                    <ul className={MenuBarIsOpen ? 'active':''}>
                        <li>
                            <a href="" className='active nav__link'  onClick={() => goHome()}>
                                Bas Sahypa
                            </a>
                        </li>
                        <li>
                            <a className='nav__link' onClick={() => {goList("univer")}} id='univer'>
                                Yokary Okuw
                            </a>
                        </li>
                        <li>
                            <a className='nav__link'  onClick={() => {goList("vacational")}} id='vacational'>
                                Orta Hunar
                            </a>
                        </li>
                        <li>
                            <a href="https://korpe.ticit.edu.tm" target='_blank'>
                                Cagalar Bagy
                            </a>
                        </li>
                        <li>
                            <a className='nav__link'  onClick={() => {goList("news")}} id='news'>
                                Tazelikler
                            </a>
                        </li>
                        <li>
                            <a href="https://kesgitle.ticit.edu.tm/" target='_blank'>
                                Kesgitle
                            </a>
                        </li>
                        <li>
                            <a className='nav__link'  onClick={() => {goList("official")}} id='official'>
                                Kanunlar
                            </a>
                        </li>
                        <li>
                            <a href="https://olimp.ticit.edu.tm/" target='_blank'>
                                Olimp
                            </a>
                        </li>
                        <li onClick={()=>goSearch()}>
                            <SearchIcon />
                        </li>
                    </ul>
                    <div className="menu__icon" onClick={MenuOpenClose}>
                        { MenuBarIsOpen ? <span><CloseIcon /></span> : <span><MenuIcon /></span> }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navigation
