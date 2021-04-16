import React, { useRef, useEffect, useCallback } from 'react';

import { Button,  ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useSpring, animated } from 'react-spring';

import {Background,ModalWrapper,ModalContent,ModalImg,CloseModalButton,Input,FormGroup,Label} from './modal.style'
export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();
  const close  = useRef();


  const animation = useSpring({
    config: {
      duration: 250
    },
 opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  })



  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );
  console.log("object");
  return (
  
      <>
        {showModal ? (
          <Background onClick={closeModal} ref={modalRef}>
            <animated.div style={animation}>
              <ModalWrapper showModal={showModal}>
                <ModalImg src={require('../../images/girl.gif')} alt='camera' />
                <ModalContent>
                <FormGroup>
                  <Label>Label 1</Label>
                    <Input/>
                  </FormGroup>
                  <FormGroup>
                  <Label>Label 2</Label>
                    <Input/>
                  </FormGroup>
                </ModalContent>
                    <CloseModalButton
                  aria-label='Close modal'
                  onClick={() => setShowModal(prev => !prev)}
                />
             
              </ModalWrapper>
            </animated.div>
          </Background>
        ) : null}
      </>
    
  );
}

export default Modal;