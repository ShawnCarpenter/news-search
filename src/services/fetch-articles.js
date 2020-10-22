
const apiKey = '2874bee132434ab78c806648869df4a4';

export const fetchArticles = searchTerm => {
  return fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${apiKey}`)
    .then(res => res.json())
    .then(json => json.articles)
    .then(stories => stories.map(story => ({
      title:story.title,
      author:story.author,
      description:story.description,
      url:story.url,
      urlToImage:story.urlToImage
    })));
};
