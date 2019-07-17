import * as React from 'react';
import { IModal } from './modal-window';
import ArticleData from '../../data/articleData';

export interface IModalArticleProps {
  data: ArticleData
}

interface IState {

}

export default class ModalArticle extends React.Component<IModalArticleProps, IState> implements IModal<IModalArticleProps, IState> {

  constructor(props: IModalArticleProps) {
    super(props);
  }

  public render(): React.ReactNode {
    return <div>
      <span>KEKEKE</span>
      <span>{this.props.data.Title}</span>
    </div>;
  }
}