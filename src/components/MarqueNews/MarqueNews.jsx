import React, { useState } from 'react'
import './MarqueNews.css'
import Marquee from "react-fast-marquee";
import { axiosInstance } from '../../utils/axiosInstance';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function MarqueNews() {
  const navigate = useNavigate()
  const [MarqueNews, setMarqueNews] = useState([])
  const getMarqueNews = () => {
      axiosInstance
        .get("marque-articles/")
        .then((res) => {
          setMarqueNews(res.data);
        })
        .catch((err) => { console.log(err) })
    };
    function handleClick(id) {
      navigate("/article", { state: id });
    }
  useEffect(() => {
        getMarqueNews()
      }, []);
  return (
    <div className='marque__wrapper'>
        <div className="marque__title">
            <p>
                SCRMET
            </p>
        </div>
        <Marquee pauseOnHover>
          {MarqueNews?.map((item, index)=>{return(
            <a key={index} className='marque__news__list' onClick={() => handleClick(item.id)}>{item.title_tm}</a>
          )})}
        </Marquee>
    </div>
  )
}

export default MarqueNews