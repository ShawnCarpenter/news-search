import PropTypes from 'prop-types';
import React from 'react';
import styles from './Article.css';

const Article = ({ title, author, description, url, urlToImage }) => (
  <div className={styles.Article}>
    <h1><a href={url}>{title}</a></h1>
    <span>Author: {author}</span>
    <img src={urlToImage} alt={title}/>
    <div>{description}</div>
  </div>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  urlToImage: PropTypes.string.isRequired
};
export default Article;
