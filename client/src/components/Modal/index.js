import React, { useRef, useState, useEffect, useCallback } from "react";

import { Button, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useSpring, animated } from "react-spring";

import {
  Background,
  ModalWrapper,
  ModalContent,
  ModalImg,
  CloseModalButton,
  Input,
  FormGroup,
  Label,
} from "./modal.style";
export const Modal = ({ showModal, setShowModal, data }) => {
  const modalRef = useRef();
  const close = useRef();
  const [formObject, setFormObject] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        console.log("I pressed");
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);
  console.log("object");
  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalImg src={require("../../images/girl.gif")} alt="camera" />
              <ModalContent>
                <FormGroup>
                  <Label>Make</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    onChange={handleInputChange}
                    placeholder="myemail@email.com"
                    value={data.make}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Model</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    onChange={handleInputChange}
                    placeholder="myemail@email.com"
                    value={data.value}
                  />{" "}
                </FormGroup>
                <FormGroup>
                  <Label>Year</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    onChange={handleInputChange}
                    placeholder="myemail@email.com"
                    value={data.year}
                  />{" "}
                </FormGroup>
              </ModalContent>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

export default Modal;
