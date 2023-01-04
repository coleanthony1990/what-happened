import React from 'react'
import ListStory from './ListStory'
import './List.css'

const List = ({stories}) => {
  const formattedStories = stories.filter(article => {
    if (article.title && article.multimedia) {
      return article
    }
  })
  const article = formattedStories.map((story, index) => {
    
    return (
      <ListStory
        key={index}
        section={story.section}
        title={story.title}
        abstract={story.abstract}
        byline={story.byline}
        photo={story.multimedia}
        created_date={story.created_date}
        uri={story.uri}
        />
    )
  })
  return (
    <div className='list-view'>
      {article}
    </div>
  )
}

export default List
