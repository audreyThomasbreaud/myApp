import React, { Component,useState,useEffect } from 'react';
import User from '../interface/User.interface';

const Articles = () => {
  const [hasError, setErrors] = useState(false);
  const [articles, setArticles] = useState([]);

  async function fetchData() {
    return fetch (`http://127.0.0.1:3000/articles`,
    {
        method: 'GET',
        cache: 'default',
    })
  }

  useEffect(() => {
    fetchData()
    .then(res => res.json())
    .then((res) => {
      console.log(res)
      setArticles(res);
    });
  }, []);

  return (
    <div>
      {articles &&
      articles.map((article: any) => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.content}</p>
        </div>
      ))}
      {hasError &&
      <span> Has error: {hasError}</span>}
    </div>
  );
};

export default Articles;











