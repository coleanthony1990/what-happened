import React from 'react'
import './SingleArticle.css'

const SingleArticle = ({storyToRender}) => {
  const { abstract, section, title, multimedia, byline, } = storyToRender
  return (
    <div className='single-story'>
      <h2 className='title'>{title}</h2>
      <p className='single-byline'>{byline}</p>
      <img  className='img' src={multimedia[0].url} alt={multimedia[0].caption}/>
      <p className='caption'>{multimedia[0].caption} {multimedia[0].copyright}</p>
      <p className='single-abstract'>{abstract}</p>
      
    </div>
  )
}

export default SingleArticle
