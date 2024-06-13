import React, { useEffect, useState } from 'react'
import './Multimedia.css'
import { axiosInstance } from '../../utils/axiosInstance';
import { useNavigate } from 'react-router-dom';
import HumanReadableDate from '../../utils/HumanReadableDate';

function Multimedia() {
    const navigate = useNavigate()
    const [MultimediaArticle, setMultimediaArticle] = useState([])
    useEffect(() => {
        axiosInstance
            .get(`multimedia-article/`)
            .then((res) => {
                setMultimediaArticle(res.data)
            })
            .catch((err) => {
            console.log(err);
            });
    }, [])
    function handleClick(id) {
       navigate('article/', {state: id}) 
    }
    function ShowAll(typear) {
      navigate("/articles", { state: typear });
    }
  return (
    <div className="container">
        <div className="multimedia">
            <div className="multimedia__header">
                <div className="multimedia__title">
                    <p>Multimedia</p>
                </div>
                <div className="multimedia__all">
                    <a onClick={() => {ShowAll('multimedia')}}>SHOW ALL</a>
                </div>
            </div>
            <div className="multimedia__cards">
                {
                    MultimediaArticle.map((item, index) => {return(
                        <div className="multimedia__card" key={index}>
                            <div className="multimedia__card__img">
                                <img src={item.images_for_web[0].src} alt="" />
                            </div>
                            <div className="multimedia__card__date">
                                <p>
                                    <HumanReadableDate date={item.created_at} />
                                </p>
                            </div>
                            <div className="multimedia__card__title">
                                <p onClick={() => handleClick(item.id)}>{item.title_tm}</p>
                            </div>
                        </div>
                    )})
                }
            </div>
        </div>
    </div>
  )
}

export default Multimedia