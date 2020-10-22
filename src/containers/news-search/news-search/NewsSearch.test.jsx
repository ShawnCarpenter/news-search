import React from 'react';
import { render, screen } from '@testing-library/react';
import NewsSearch from './NewsSearch';
import { fetchArticles } from '../../../services/fetch-articles';

jest.mock('../../../services/fetch-articles');

describe('NewsSearch container', () => {
  it('renders a story to the page', () => {
    fetchArticles.mockResolvedValue([
      {
        title: 'Superman saves kitten',
        author: 'Clark Kent',
        description: 'Some stuff happened',
        url: 'https://www.dailyplanet.com',
        urlToImage: 'https://www.dailyplanet.com/img'
      }
    ]);
    render(<NewsSearch/>);
    screen.findAllByAltText('Superman saves kitten');
  });
});
