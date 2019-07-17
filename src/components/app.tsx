import * as React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import ArticleContainer from './articleContainer';

import DataLoader from '../data/dataLoader';

require('./app.css');
require('./custom-scrollbar/scrollbar.css');

interface IProps {

}

interface IState {

}

export default class App extends React.Component<IProps, IState> {

  public render(): React.ReactNode {
    return <BrowserRouter>
      <div id='app'>
        <ArticleContainer title='Отцы-Основатели' articles={DataLoader.GetAncestors()}/>
        <ArticleContainer title='Летопись' articles={DataLoader.GetArticles()}/>
      </div>
      <ModalContainer />
    </BrowserRouter>
  }
}
