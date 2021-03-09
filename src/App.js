
import './App.css';
import Button from '@material-ui/core/Button';

import Container from '@material-ui/core/Container';
import News from './components/News/News';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {

  const [articles, setArticles] = useState([]);
  // useEffect(() => {

  //   const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=b093438169e44148aa7051053a7a930e';
  //   fetch(url)
  //   .then(res => res.json())
  //   .then(data => setArticles(data.articles))
  // }, [])
// calling API using axios 
  useEffect (() =>{
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=b093438169e44148aa7051053a7a930e';

    axios(url)
    .then(data => setArticles(data.data.articles))
  }, [])

  return (
    <div className="news" >
      <Container>
        <h1>Breaking News!!!!!</h1>
        <h2>Total News: {articles.length}</h2>
        {
          articles.map(article => <News article={article}></News>)
        }
      </Container>
    </div>
  );
}

export default App;
