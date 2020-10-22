import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ArticleList from './ArticleList';

describe('ArticleList component', () => {
  afterEach(() => cleanup());
  it('renders ArticleList', () => {
    const { asFragment } = render(<ArticleList articles={[
      {
        title: 'Headline here',
        author: 'Clark Kent',
        description: 'Some stuff happened',
        url: 'https://www.dailyplanet.com',
        urlToImage: 'https://www.dailyplanet.com/img'
      }
    ]} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
