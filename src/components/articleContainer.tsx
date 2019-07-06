import * as React from 'react';

import Article from './article';
import ArticleData from '../data/articleData';

require('./articleContainer.css');

interface IProps {
  articles: Array<ArticleData>;
  title: string;
}

interface IState {

}

export default class ArticleContainer extends React.Component<IProps, IState> {
  public render(): React.ReactNode {
    return <div className='article-container'>
      <div className='app-title'>{this.props.title}</div>
      {this.props.articles.map((article)=>{
        return <Article id={article.Id} data={article}/>
      })}
    </div>;
  }
}