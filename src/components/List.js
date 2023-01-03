import React from 'react'
import ListStory from './ListStory'

const List = ({stories}) => {
  console.log(stories)
  const article = stories.map((story, index) => {
    
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
