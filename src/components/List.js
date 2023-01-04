import React from 'react'
import ListStory from './ListStory'

const List = ({stories}) => {
  const formattedStories = stories.filter(article => {
    if (article.section !== 'admin' && article.multimedia !== null) {
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
        />
    )
  })
  return (
    <div>
      {article}
    </div>
  )
}

export default List
