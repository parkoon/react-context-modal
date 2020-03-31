import createModalProvider from './createModalProvider'
import ModalContentOne from '../../components/ModalContentOne'
import ModalContentTwo from '../../components/ModalContentTwo'

export const MODAL_ONE = 'modal_one'
export const MODAL_TWO = 'modal_two'

const CONTENT_MAP = {
  [MODAL_ONE]: ModalContentOne,
  [MODAL_TWO]: ModalContentTwo,
}

export default createModalProvider(CONTENT_MAP)
