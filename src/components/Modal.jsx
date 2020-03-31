import React from 'react'
import styled from 'styled-components'

const StyledOverlay = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
`
const StyledModaBox = styled.div`
  padding: 12px;
  background: #fff;
  width: 400px;
  margin: 40px auto 0px;
`
function Modal({ children }) {
  return (
    <>
      <StyledOverlay>
        <StyledModaBox>{children}</StyledModaBox>
      </StyledOverlay>
    </>
  )
}

export default Modal
