import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import React from 'react'
import { useModalContext } from '../../context/ModalContext';
import LoginForm from '../login/LoginForm';
import RegisterForm from '../register/RegisterForm';

const AuthModal = () => {
    const { modalOpen, onClose} = useModalContext()
    return (
      <>
        <Modal closeOnOverlayClick={false} isOpen={modalOpen.isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{(modalOpen.form === 'login') ? "Login" : "Register"}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {(modalOpen.form === 'login') ? <LoginForm/> : <RegisterForm />}
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }

export default AuthModal;