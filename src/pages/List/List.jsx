import React, { useEffect, useState } from 'react'
import InfoPanel from '../../components/Info/InfoPanel'
import Navigation from '../../components/Navigation/Navigation'
import '../../App.css'
import Footer from '../../components/Footer/Footer'
import './List.css'
import image from './../../assets/images/daily-main.jpg'
import { useLocation } from 'react-router-dom'
import { axiosInstance } from '../../utils/axiosInstance'
import { useNavigate } from 'react-router-dom'
import HumanReadableDate from '../../utils/HumanReadableDate'
import DOMPurify from "dompurify";

function List() {
    const navigate  = useNavigate()

    const location = useLocation();
    const typear = location.state;
    const [Articles, setArticles] = useState(null)

    useEffect(() => {
        window.scroll(0,0)
        axiosInstance
            .get(`articles/via/${typear}/`)
            .then((res) => {
                setArticles(res.data)
            })
            .catch((err) => {
                console.log(err);
            });
    }, [typear])
    function handleClick(id) {
       navigate('/article/', {state: id}) 
    }
  return (
    <>
        <InfoPanel />
        <Navigation />
        <div className="list__wrapper container">
            {
                Articles?.map((item, index)=> {return (
                    <div className="article__card">
                        <div className="article__card__image" style={{ backgroundImage: `url(${item.images_for_web[0].src})` }}>
                            <div className="article__card__date">
                                <p>{item.views}</p>
                                <p>
                                    <HumanReadableDate date={item.created_at}/>
                                </p>
                            </div>
                        </div>
                        <div className="article__card__title">
                            <p onClick={() => {handleClick(item.id)}} 
                                  dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(item.description_tm),}}
                                >
                            </p>
                        </div>
                    </div> 
                )})
            }
        </div>
        <Footer />
    </>
  )
}

export default List
