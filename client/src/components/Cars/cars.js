import React, {
    useState,
    useEffect
} from 'react'
import API from "../../utils/API";
import Modal from "../Modal/"

import { ListItem, List,TechBtn,TechContainer,Heading } from "./cars.style";
const Cars = (props) => {
    // const Car = [car, setCar] = useState({})
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(prev => !prev);
      };
    console.log("cars", props.Cars);
    return (
        <>
            <List>

                { props.Cars.map(car => (
                <ListItem key={car._id}>
                <TechBtn onClick={openModal}>
                  {car.make}
                </TechBtn>
                <Modal showModal={showModal} setShowModal={setShowModal} />

                </ListItem>
                ))}
            </List>
            <TechContainer>
            <Heading>
                    hello er
            </Heading>
            </TechContainer>
            </>
    
    )
}

export default Cars