import { useEffect, useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import List from './components/List';
import './App.css';
import Form from './components/Form';

function App() {

  const [stories, setStories] = useState([])
  const [keyword, setKeyword] = useState('home')

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://api.nytimes.com/svc/topstories/v2/${keyword}.json?api-key=TuXGkIt8IAUEamKaAM5AIaMaDl4BMx7Y`, requestOptions)
      .then(response => response.json())
      .then(result => setStories(result.results))
      .catch(error => console.log('error', error));
  }, [keyword])

  const changeKeyword = (keyword) => {
    console.log(typeof keyword)
    setKeyword(keyword)
  }

  return (
    <div className="App">
      <header className="App-header">
        <button className='logo'>What Happened?</button>
        <Form changeKeyword={changeKeyword} />
      </header>
      <Switch>
      <Route exact path="/">
        <List stories={stories}/>
      </Route>
      
      </Switch>
    </div>
  );
}

export default App;
