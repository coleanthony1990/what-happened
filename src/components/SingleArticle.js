import React from 'react'
import './SingleArticle.css'

const SingleArticle = ({storyToRender}) => {
  const { abstract, section, title, multimedia, byline, url} = storyToRender

  const formatSection = () => {
    if (section === 'us') {
      return 'U.S.'
    } else if (section === 'nyregion') {
      return 'New York Region'
    } else if (section === 'realestate') {
      return 'Real Estate'
    } else if (section === 't-magazine') {
      return 'Times Magazine'
    } else if (section === 'well') {
      return 'Wellness'
    } else {
      return section[0].toUpperCase() + section.slice(1)
    }
  }
  return (
    <div className='single-story'>
      <p className='single-section'>{formatSection()}</p>
      <h2 className='title'>{title}</h2>
      <p className='single-byline'>{byline}</p>
      <img  className='img' src={multimedia[0].url} alt={multimedia[0].caption}/>
      <p className='caption'>{multimedia[0].caption} {multimedia[0].copyright}</p>
      <p className='single-abstract'>{abstract}</p>
      <a className='nyt-link' href={url} target="_blank" rel="noreferrer">View Full article at New York Times</a>
    </div>
  )
}

export default SingleArticle
