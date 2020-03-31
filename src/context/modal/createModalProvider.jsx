import React, { PureComponent } from 'react'
import Modal from '../../components/Modal'
import { Provider, Consumer } from './ModalContext'

export { Consumer }

export default function createModalProvider(ContentMap = {}) {
  return class ModalProvider extends PureComponent {
    state = { showModal: false }

    handleClose = () => this.setState({ showModal: false })
    handleOpen = contentId => {
      this.contentId = contentId
      this.setState({ showModal: true })
    }

    render() {
      const { handleClose, handleOpen, contentId } = this
      const { showModal } = this.state
      const { children } = this.props
      const ModalContent = ContentMap[contentId]
      return (
        <Provider value={{ openModal: handleOpen, closeModal: handleClose }}>
          {children}
          {showModal && ModalContent && (
            <Modal>
              <ModalContent />
            </Modal>
          )}
        </Provider>
      )
    }
  }
}
