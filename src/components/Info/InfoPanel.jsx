import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import './InfoPanel.css'
function InfoPanel() {
  return (
    <div>
        <div className="info__wrapper">
            <div className="container">
                <div className="info">
                    <div className="info__card">
                        <LocationOnIcon />
                        <p>Ashgabat N.Gullayev, 22</p>
                    </div>
                    <div className="info__card">
                        <LocalPhoneIcon />
                        <p>+99312946014 / +99312946019</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InfoPanel