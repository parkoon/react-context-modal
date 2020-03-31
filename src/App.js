import React from 'react'
import styled from 'styled-components'
import { Consumer } from './context/modal/ModalContext'
import ModalProviderWithKey, { MODAL_ONE, MODAL_TWO } from './context/modal/ModalProviderWithKey'

const StyledAppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  line-height: 1.7;
`

function App() {
  return (
    <StyledAppContainer>
      <ModalProviderWithKey>
        <Consumer>
          {({ openModal }) => <button onClick={() => openModal(MODAL_ONE)}>모달 열기 1</button>}
        </Consumer>

        <Consumer>
          {({ openModal }) => <button onClick={() => openModal(MODAL_TWO)}>모달 열기 2</button>}
        </Consumer>
      </ModalProviderWithKey>
    </StyledAppContainer>
  )
}
export default App
