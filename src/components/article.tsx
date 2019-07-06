import * as React from 'react';

import ArticleData from '../data/articleData';

require('./article.css');

interface IProps {
  id: number;
  data: ArticleData;
}

interface IState {

}

export default class Article extends React.Component<IProps, IState> {

  public constructor(props: IProps) {
    super(props);
  }

  private renderImage(): React.ReactNode | null {
    const image = this.props.data.Image;
    return image != null ?
      <div className='article-imgpart'>
        <img src={image}/>
      </div> : null;
  }

  private renderText(): React.ReactNode {
    return <div className='article-textpart'>
      <div className='article-textpart-title'>{this.props.data.Title}</div>
      <div className='article-textpart-description'>{this.props.data.Description}</div>
    </div>;
  }

  public render(): React.ReactNode {
    const color = {
      'background-color': this.props.data.BackgroundColor
    } as React.CSSProperties;

    return <div id={this.props.id.toString()} className='article' style={color}>
      {this.renderImage()}
      {this.renderText()}
    </div>;
  }
}