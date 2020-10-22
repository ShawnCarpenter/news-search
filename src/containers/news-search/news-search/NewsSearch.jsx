import React, { Component } from 'react';

import ArticleList from '../../../components/Article/ArticleList';
import Loading from '../../../components/Loading/Loading';
import Search from '../../../components/Search/Search';
import { fetchArticles } from '../../../services/fetch-articles';

export default class NewsSearch extends Component {
  
  state={
    loading:true,
    searchTerm:'',
    articles:[]
  }

  handleChange = ({ target }) => {
    this.setState({ searchTerm:target.value });
  }

  handleForm = event => {
    event.preventDefault();
    fetchArticles(this.state.searchTerm)
      .then(articles => this.setState({ articles, loading:false }));
      
    
  }

  render() {
    return (
      <>
        <Search 
          searchTerm={this.state.searchTerm}
          onChange={this.handleChange}
          onSubmit={this.handleForm}
        />
        {this.state.loading ? <Loading/> : <ArticleList 
          articles={this.state.articles}
        />}
      </>
    );
  }
}
