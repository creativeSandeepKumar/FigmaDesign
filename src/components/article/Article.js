import React from 'react';
import './article.css';

function Article({imgUrl, date, text}) {
  return (
    <div className='gpt3__blog-container_article'>
      <div className="gpt3__blog-container__article">
        <div className="gpt3__blog-container_article-image">
          <img src={imgUrl} alt="blog_image" />
        </div>
        <div className="gpt3__blog-container__article-content">
          <div>
            <p>{date}</p>
            <h3>{text}</h3>
          </div>
          <p>Read Full Article</p>
        </div>
      </div>
    </div>
  )
}

export default Article;