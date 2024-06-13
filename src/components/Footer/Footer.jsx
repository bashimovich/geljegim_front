import React from 'react'
import './Footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo from './../../assets/images/Geljegim.png'

function Footer() {
  return (
    <div className="footer__wrapper">
        <div className="container">
          <div className="footer__cards">
            <div className="footer__card">
              <div className="footer__logo">
                <img src={logo} alt="" />
              </div>
              <div className="footer__copy__right">
                <p> 2024 BT. Ähli hukuklar goralandyr. 19.01.2022ý. seneli Ygtyýarnama №1-22-19-16p</p>
              </div>
              <div className="footer__social__media__link">
                <TwitterIcon />
                <LinkedInIcon />
                <InstagramIcon />
              </div>
            </div>
            <div className="footer__card">
              <p className='footer__card__pages__p'>Sahypalar</p>
              <ul className='footer__card__ul'>
                <li>Bas sahypa</li>
                <li>Yokary Okuw</li>
                <li>Orta Hunar</li>
                <li><a href="https://korpe.ticit.edu.tm/" className='footer__link' target='_blank'>Cagalar Bagy</a></li>
                <li>Tazelikler</li>
                <li><a href="https://kesgitle.ticit.edu.tm/" className='footer__link' target='_blank'>Kesgitle</a></li>
                <li>Kanunlar</li>
                <li><a href="https://olimp.ticit.edu.tm/" className='footer__link' target='_blank'>Olimp</a></li>
              </ul>
            </div>
            <div className="footer__card">
              <p className='habarlasmak'>Habarlasmak Ucin</p>
              <p className='address'>
                ticit@sanly.tm
                Ashgabat, N.Gullayev 22
                +99312946014 / +99312946019
                www.ticit.edu.tm
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer
