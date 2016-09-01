import React, { Component, PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Auth.scss';

class Auth extends Component {
  render() {
    const { showModal, authUrl, onModalClose } = this.props;

    return (
      <div>
        <Modal show={showModal} onHide={onModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Poniverse Auth</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe src={authUrl} width="100%" height="550px" frameBorder="0" scrolling="no" className="poniverse-iframe"></iframe>
          </Modal.Body>
        </Modal>
        {this.renderIframe()}
      </div>
    );
  }

  renderIframe() {
    const { isAuthenticating, authUrl } = this.props;

    if (isAuthenticating) {
      return (
        <iframe src={authUrl} style={{display: 'none'}} />
      );
    }
  }
}

Auth.propTypes = {
  isAuthenticating: PropTypes.bool.isRequired,
  authUrl: PropTypes.string.isRequired,
  showModal: PropTypes.bool.isRequired,
  onModalClose: PropTypes.func.isRequired,
};

export default Auth;
