import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Modal from "../Modal/";
import AddModal from "../Modal/addModal";
import { ListItem, List, TechBtn, TechContainer, Heading } from "./cars.style";
const Cars = ({ Cars }) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  console.log("cars", Cars);
  return (
    <>
      <List>
        {Cars.map((car) => (
          <ListItem key={car._id}>
            <TechBtn onClick={openModal}> {car.make} </TechBtn>
            <Modal
              showModal={showModal}
              data={car}
              setShowModal={setShowModal}
            />
          </ListItem>
        ))}
      </List>
      <TechContainer>
        <button onClick={openModal}>Add another car </button>
        <AddModal showModal={showModal} setShowModal={setShowModal} />
      </TechContainer>
    </>
  );
};

export default Cars;
