import * as React from 'react';
import ReactModal from 'react-modal';

export interface IModal<IModalProps, IModalState> extends React.Component<IModalProps, IModalState> {

}

interface IProps {
  opened: boolean;
  modal: IModal<any, any> | null;
}
  
interface IState {
  isOpen: boolean;
}

export default class ModalWindow extends React.Component<IProps, IState> {
  
  constructor (props: IProps) {
    super(props);
    this.state = {
      isOpen: props.opened
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  /*public openModal(modal: IModal<any, any>) {
    this.setState({
      isOpen: true,
      modal: modal
    });
  }*/

  private handleOpenModal () {
    this.setState({ isOpen: true });
  }

  private handleCloseModal () {
    this.setState({ isOpen: false });
  }
  
  public render() {
    return <div>
      {/*<button onClick={this.handleOpenModal}>Open Modal</button>*/}
      <ReactModal
        isOpen={this.state.isOpen}
        onRequestClose={this.handleCloseModal}
      >
        <button onClick={this.handleOpenModal}>Open Modal</button>
        <button onClick={this.handleCloseModal}>Close Modal</button>
        {this.props.modal}
      </ReactModal>
    </div>
    }
}