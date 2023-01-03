import React from 'react'
import "./ListStory.css"

const ListStory = ({photo, byline, section, abstract, title}) => {
  return (
    <div className='listed-story'>
      <img className="list-img" src={photo.url} alt={photo.caption}/>
      <p>{section}</p>
      <h3>{title}</h3>
      <p>{abstract}</p>
      <p>{byline}</p>
    </div>
  )
}

export default ListStory
