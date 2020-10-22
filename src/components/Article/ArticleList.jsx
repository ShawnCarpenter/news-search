import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import styles from './ArticleList.css';

const ArticleList = ({ articles }) => {
  const articleList = articles.map(article => (
    <li key={article.url}>
      <Article {...article} />
    </li>
  ));

  return <ul className={styles.ArticleList}>{articleList}</ul>;
  
};

ArticleList.propTypes = {
  articles:PropTypes.arrayOf(PropTypes.object)
};
export default ArticleList;
