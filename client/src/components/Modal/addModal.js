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
import API from "../../utils/API";

export const AddModal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();
  const close = useRef();
  const [formObject, setFormObject] = useState({});

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      make: formObject.make,
      model: formObject.model,
      year: formObject.year,
    };
    API.createCars(userData)
      .then((data) => {
        console.log("car added ");
        console.log(data.data);
      })
      .catch((err) => console.log(err));
  };
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }
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
                    type="text"
                    name="make"
                    id="make"
                    onChange={handleInputChange}
                    placeholder="make"
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Model</Label>
                  <Input
                    type="text"
                    name="model"
                    id="model"
                    onChange={handleInputChange}
                    placeholder="model"
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Year</Label>
                  <Input
                    type="text"
                    name="year"
                    id="year"
                    onChange={handleInputChange}
                    placeholder="year"
                  />
                </FormGroup>
                <FormGroup>
                  <button onClick={handleSubmit}> submit</button>
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

export default AddModal;
