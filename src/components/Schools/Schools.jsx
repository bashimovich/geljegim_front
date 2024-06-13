import React, { useEffect, useState } from 'react'
import './Schools.css'
import { useNavigate } from 'react-router-dom'
import { axiosInstance } from '../../utils/axiosInstance'
import HumanReadableDate from '../../utils/HumanReadableDate'
import DOMPurify from "dompurify";


function Schools() {
    const navigate = useNavigate()
    const [UniverArticle, setUniverArticle] = useState([])
    const [VacationalArticle, setVacationalArticle] = useState([])
    useEffect(() => {
        axiosInstance
            .get(`homeuniver-article/`)
            .then((res) => {
                setUniverArticle(res.data)
            })
            .catch((err) => {
            console.log(err);
            });
        axiosInstance
            .get(`homevacational-article/`)
            .then((res) => {
                setVacationalArticle(res.data)
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
        <div className="schools">
            <div className="universities">
                <div className="schools__header">
                    <div className="schools__title">
                        <p>Universities</p>
                    </div>
                    <div className="schools__all">
                        <a onClick={() => {ShowAll('univer')}}>SHOW ALL</a>
                    </div>
                </div>
                <div className="schools__cards">
                    {
                        UniverArticle.map((item, index)=>{return(
                            <div key={index} className="schools__card">
                                <div className="schools__card__img"  style={{ backgroundImage: `url(${item.images_for_web[0].src})` }}></div>
                                <div className="schools__card__title">
                                    <p className="schools__card__data">
                                        <HumanReadableDate date={item.created_at} />
                                    </p>
                                    <p className="schools__card__name" onClick={()=>{handleClick(item.id)}}
                                          dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(item.title_tm),}}
                                        
                                        >
                                    </p>
                                    <p className="schools__card__description"
                                        dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(item.description_tm),}}
                                    >
                                    </p>
                                </div>
                            </div>

                        )})
                    }
                </div>
            </div>
            <div className="vacaitional">
                <div className="schools__header">
                    <div className="schools__title">
                        <p>Vacaitional Schools</p>
                    </div>
                    <div className="schools__all">
                        <a onClick={() => {ShowAll('vacational')}}>SHOW ALL</a>
                    </div>
                </div>
                <div className="schools__cards">
                    {
                        VacationalArticle.map((item, index)=>{return(
                            <div key={index} className="schools__card">
                                <div className="schools__card__img"  style={{ backgroundImage: `url(${item.images_for_web[0].src})` }}></div>
                                <div className="schools__card__title">
                                    <p className="schools__card__data">
                                        <HumanReadableDate date={item.created_at} />
                                    </p>
                                    <p className="schools__card__name" onClick={() => {handleClick(item.id)}}
                                          dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(item.title_tm),}}
                                        >
                                    </p>
                                    <p className="schools__card__description" 
                                        dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(item.description_tm),}}
                                    >
                                    </p>
                                </div>
                            </div>
                        )})
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Schools