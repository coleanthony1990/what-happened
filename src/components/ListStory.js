import React from 'react'
import { Link } from 'react-router-dom'
import "./ListStory.css"

const ListStory = ({photo, byline, section, abstract, title, created_date}) => {
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
  const linkText = `/${created_date}`
  console.log(created_date)

  return (
    <Link to={linkText} style={{ textDecoration: 'none' }}><div className='listed-story'>
      <img className="list-img" src={photo[0].url} alt={photo.caption}/>
      <div className='story-text'>
        <p className='description section'>{formatSection()}</p>
        <h3 className='description title'>{title}</h3>
        <p className='description abstract'>{abstract}</p>
        <p className='description byline'>{byline}</p>
      </div>
    </div></Link>
  )
}

export default ListStory
