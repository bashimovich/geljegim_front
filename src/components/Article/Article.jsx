import React from 'react'
import './Article.css'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import HumanReadableDate from '../../utils/HumanReadableDate';
import DOMPurify from "dompurify";

function Article(props) {
  return (
    <div className='article-wrapper'>
        <div className="article__image"   style={{ backgroundImage: `url(${props?.data.images_for_web[0].src})` }}></div>
        <div className="article__info">
            <p className="article__views"><span><RemoveRedEyeIcon /></span> {props?.data?.views}</p>
            <p className="article__date"><HumanReadableDate date={props?.data?.created_at}/></p>
        </div>
        <div className="article__content">
            <p className="article__title"  dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props?.data?.title_tm),}}></p>
            <p className="article__content__full"  dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props?.data?.content_tm),}}></p>
        </div>
    </div>
  )
}

export default Article