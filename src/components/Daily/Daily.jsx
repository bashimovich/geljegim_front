import React, { useEffect, useState } from 'react'
import './Daily.css'
import image from './../../assets/images/daily-main.jpg'
import CenteralBanner from '../CenteralBanner/CenteralBanner'
import gifcik from './../../assets/images/mini.gif'
import Official from './Official'
import { axiosInstance } from '../../utils/axiosInstance'
import { useNavigate } from 'react-router-dom'
// import moment from 'moment';
import DOMPurify from "dompurify";
import HumanReadableDate from '../../utils/HumanReadableDate'


function Daily() {
    const navigate = useNavigate()
    const [MainArticle, setMainArticle] = useState([])
    const [FourArticle, setFourArticle] = useState([])
    function handleClick(id) {
      navigate("/article", { state: id });
    }
    function ShowAll(typear) {
      navigate("/articles", { state: typear });
    }
  useEffect(() => {
      axiosInstance
        .get(`main-article/`)
        .then((res) => {
            setMainArticle(res?.data[0])
        })
        .catch((err) => {
          console.log(err);
        });
      axiosInstance
        .get(`four-article/`)
        .then((res) => {
            setFourArticle(res.data)
        })
        .catch((err) => {
          console.log(err);
        });
  }, [])
  return (
    <div className="container">
        <div className="daily__wrapper">
            <div className="daily__content__banner">
                <div className="daily__content">
                    <div className="daily__header">
                        <div className="daily__title">
                            <p>Daily</p>
                        </div>
                        <div className="daily__all">
                            <a onClick={() => {ShowAll('news')}}>SHOW ALL</a>
                        </div>
                    </div>
                    <div className="daily__box">
                        <div className="daily__main">
                            {MainArticle.images_for_web && <div className="main__image"  style={{ backgroundImage: `url(${MainArticle?.images_for_web[0]?.src})` }}></div>}
                            <div className="main__tag__date">
                                <a href='#'>{MainArticle?.category?.name_tm}</a>
                                <span><HumanReadableDate date={MainArticle?.created_at} /></span>
                            </div>
                            <div className="main__title">
                                <p onClick={()=>handleClick(MainArticle?.id)}>{MainArticle?.title_tm}</p>
                            </div>
                            <div className="main__description">
                                <p
                                    dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(MainArticle?.description_tm),}}
                                >
                                </p>
                            </div>
                        </div>
                        <div className="daily__four__box">
                            {
                                FourArticle?.map((item, index)=> {return (
                                    <div className="daily__one__box" key={index}>
                                        <div className="four__box__image" style={{ backgroundImage: `url(${item?.images_for_web[0].src})` }}></div>
                                        <div className="four__box__tag__date">
                                            <a href='#'>{item?.category?.name_tm}</a>
                                            <span><HumanReadableDate date={item?.created_at} /></span>
                                        </div>
                                        <div className="four__box__description">
                                            <p onClick={()=>handleClick(item.id)}
                                                  dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(item.title_tm),}}
                                                >
                                            </p>
                                        </div>
                                    </div>
                                )})                                
                            }
                        </div>
                    </div>
                </div>
                <CenteralBanner />
            </div>
            <div className="daily__banner__news">
                <Official />
                <div className="daily__news__bottom__banner">
                    <div className="daily__news__bottom__banner__img" style={{ backgroundImage: `url(${gifcik})` }}></div> 
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Daily