import React, { useEffect, useState } from 'react'
import InfoPanel from '../../components/Info/InfoPanel'
import Navigation from '../../components/Navigation/Navigation'
import Article from '../../components/Article/Article'
import Footer from '../../components/Footer/Footer'
import '../../App.css'
import './Single.css'
import Similar from './Similar'
import './../../components/Daily/Daily.css'
import { useLocation } from 'react-router-dom'
import { axiosInstance } from '../../utils/axiosInstance'

function Single() {
  const location = useLocation();
  const id = location.state;
  const [ArticleData, setArticleData] = useState(null)

  useEffect(() => {
    window.scroll(0,0)
      axiosInstance
        .get(`articles/${id}/`)
        .then((res) => {
          setArticleData(res?.data)
        })
        .catch((err) => {
          console.log(err);
        });
  }, [id])
  return (
    <>
        <InfoPanel />
        <Navigation />
        <div className="container">
          <div className="wrapper">
            {ArticleData && <Article data={ArticleData} />}
            {ArticleData && <Similar typear={ArticleData.typear} />}
          </div>
        </div>
        <Footer />
    </>
  )
}

export default Single
