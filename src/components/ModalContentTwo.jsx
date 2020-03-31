import React from 'react'
import { Consumer as ModalConsumer } from '../context/modal/ModalContext'
function ModalContentTwo() {
  return (
    <ModalConsumer>
      {({ closeModal }) => (
        <>
          <h2>Modal 1</h2>
          <p>정말로 삭제하시겠습니까?</p>
          <button>예</button>
          <button onClick={closeModal}>닫기</button>
        </>
      )}
    </ModalConsumer>
  )
}

export default ModalContentTwo
