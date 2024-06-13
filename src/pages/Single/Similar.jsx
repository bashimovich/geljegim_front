import React, { useEffect, useState } from 'react'
import './Similar.css'
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../utils/axiosInstance';
import HumanReadableDate from '../../utils/HumanReadableDate'

function Similar(props) {

    const navigate  = useNavigate()
    const [Articles, setArticles] = useState(null)

    useEffect(() => {
        window.scroll(0,0)
        axiosInstance
            .get(`articles/via/${props.typear}/`)
            .then((res) => {
                setArticles(res.data)
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])
    function handleClick(id) {
       navigate('/article/', {state: id}) 
    }
  return (
    <div className="daily__news__similar">
        <div className="daily__header">
            <div className="daily__title">
                <p>Related Articles</p>
            </div>
            <div className="daily__all">
                <a>SHOW ALL</a>
            </div>
        </div> 
        <div className="daily__news__body">
            {Articles?.map((item, index)=>{return (
                <div key={index} className="card__officiall__news">
                    {item.images_for_web && <div className="official__news__img" style={{ backgroundImage: `url(${item?.images_for_web[0].src})` }}></div>}
                    <div className="official__news_title">
                        <p className="officail__news__data">
                            <span> <HumanReadableDate date={item?.created_at} /> </span>
                        </p>
                        <p className="offical__news__description" onClick={()=>{handleClick(item.id)}}>
		    		        {item.title_tm}
                        </p>
                    </div>
                </div>
            )})}
        </div>
    </div>
  )
}

export default Similar
