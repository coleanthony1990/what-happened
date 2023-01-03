import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import List from './components/List';
import './App.css';

function App() {

  const [stories, setStories] = useState([])

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=TuXGkIt8IAUEamKaAM5AIaMaDl4BMx7Y", requestOptions)
      .then(response => response.json())
      .then(result => setStories(result.results))
      .catch(error => console.log('error', error));
  }, [])

  console.log(stories)
  return (
    <div className="App">
      <header className="App-header">
        What Happened?
      </header>
      <Route exact path="/">
        <List stories={stories}/>
      </Route>
    </div>
  );
}

export default App;
