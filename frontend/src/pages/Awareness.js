import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Aware.css';

function Awareness() {
  require('dotenv').config();
  const server = process.env.SERVER;
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get(server)
      .then(response => {
        setArticles(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="container">
      <br></br>
      <br></br>
      <div className='aware-heading'>AWARENESS PORTAL</div>
      <div className="articles-container">
        {articles.map((article, index) => (
          <div key={index} className="article">
            <div className="article-content">
              <div className="title"><h3>{article.Title}</h3></div>
              <div className="description">{article.Description}</div>
              <div className="link">
                <a href={article.Link} target="_blank" rel="noopener noreferrer">Read more</a>
              </div>
            </div>
            <span className="image">
              <img src={article.Image} alt={article.Title} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Awareness;