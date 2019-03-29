import React from "react";
import Modal from 'react-modal';
import styles from './modal.module.scss'


function createPortal(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { showLightbox: false };
      this.afterOpenModal = this.afterOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    componentWillMount() {
      if (typeof window !== `undefined`) {
        Modal.setAppElement('body');
      }
   }

    componentWillReceiveProps(nextProps){
      if(nextProps.showModal !== this.props.showModal){
        this.handleCloseModal();
      }
    }

    afterOpenModal() {
      this.setState({ showLightbox: true });
    }

    handleCloseModal() {
      this.setState({ showLightbox: false });
    }

    render() {
      return (
        <Modal
          isOpen={this.props.showModal}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.handleCloseModal}
          className={styles.modal}
          overlayClassName={styles.overlay}
        >
          <WrappedComponent showLightbox={this.state.showLightbox} {...this.props} />
        </Modal>
      )
    }
  }
}

export default createPortal;