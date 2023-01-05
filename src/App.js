import { useEffect, useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import List from './components/List';
import './App.css';
import Form from './components/Form';
import SingleArticle from './components/SingleArticle';

function App() {

  const [stories, setStories] = useState([])
  const [keyword, setKeyword] = useState('home')
  const [cachedStories, setCachedStories] = useState([])

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://api.nytimes.com/svc/topstories/v2/${keyword}.json?api-key=TuXGkIt8IAUEamKaAM5AIaMaDl4BMx7Y`, requestOptions)
      .then(response => response.json())
      .then(result => {
        setStories(result.results)
        setCachedStories(result.results)
      })
      .catch(error => console.log('error', error));
  }, [keyword])

  const changeKeyword = (keyword) => {
    setKeyword(keyword)
  }

  const handleKeyword = () => {
    setKeyword('home')
  }

  const searchStories = (term) => {
    const filteredStories = cachedStories.filter(story => story.abstract.toLowerCase().includes(term) || story.title.toLowerCase().includes(term))
    setStories(filteredStories)
    console.log(filteredStories)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Link to='/'><button className='logo' onClick={handleKeyword}>What Happened?</button></Link>
        <Form changeKeyword={changeKeyword} searchStories={searchStories}/>
      </header>
      <Switch>
      <Route exact path="/">
        <List stories={stories}/>
      </Route>
      <Route path="/:created_date" render={({ match }) => {
        const storyToRender = stories.find(story => {
          return story.created_date === match.params.created_date
        })
        return <SingleArticle
              storyToRender={storyToRender}
              />
        }}
      />
      </Switch>
    </div>
  );
}

export default App;
